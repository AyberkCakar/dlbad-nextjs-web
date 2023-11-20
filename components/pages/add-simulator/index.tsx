import React from 'react';
import { useTranslation } from '../../../hooks/useTranslation';
import { AddSimulatorButtonContainer, CancelButton } from './_styles';
import CheckboxList from '../../checkbox-list';
import {
  ADD_SIMULATOR,
  ADD_SIMULATOR_PARAMETERS,
  GET_FAILURE_TYPES,
  GET_SIMULATOR,
  UPDATE_SIMULATOR
} from './_graphql';
import { useMutation, useQuery } from '@apollo/client';
import { IFailureType, IFailureTypesResult } from '../failure-types/_model';
import { ICheckboxListData } from '../../checkbox-list/_type';
import { AlertMessage } from '../../alert';
import { initializeApollo } from '../../../lib/apolloClient';
import {
  ISimulator,
  ISimulatorParameters,
  ISimulatorRequest
} from '../simulator/_types';
import { PageContainer } from '../../page-container';
import { FormCard } from '../../form-card';
import { InputField, SaveButton } from '../../form-card/styles';
import { useRouter } from 'next/router';

export const getServerSideProps = async (ctx: any) => {
  const simulatorId: number = ctx.query?.simulatorId as number;
  const apolloClient = initializeApollo();
  const {
    data: { simulators_by_pk: simulator }
  } = await apolloClient.query({
    query: GET_SIMULATOR,
    variables: { id: simulatorId }
  });

  return { props: { simulator } };
};

export default function AddSimulatorPage({
  simulator
}: {
  simulator?: ISimulator;
}) {
  const router = useRouter();
  const isSimulatorEdit: boolean = !!simulator;
  const { t } = useTranslation();
  const [simulatorRequest, setSimulatorRequest] = React.useState<ISimulator>({
    simulatorName: '',
    expectedSoundValue: '',
    expectedTemperatureValue: '',
    expectedVibrationValue: ''
  });

  const [alertOpen, setAlertOpen] = React.useState<boolean>(false);
  const [alertSuccess, setAlertSuccess] = React.useState<boolean>(false);
  const [checkboxListData, setCheckboxListData] = React.useState<
    ICheckboxListData[]
  >([]);

  const [checkedIds, setCheckedIds] = React.useState<number[]>([]);

  const { data, error } = useQuery<IFailureTypesResult>(GET_FAILURE_TYPES);

  const [addSimulator] = useMutation(
    isSimulatorEdit ? UPDATE_SIMULATOR : ADD_SIMULATOR
  );
  const [addSimulatorParameters] = useMutation(ADD_SIMULATOR_PARAMETERS);

  React.useEffect(() => {
    if (simulator) {
      setSimulatorRequest({
        simulatorName: simulator.simulatorName,
        expectedSoundValue: simulator.expectedSoundValue,
        expectedTemperatureValue: simulator.expectedTemperatureValue,
        expectedVibrationValue: simulator.expectedVibrationValue
      });

      const defaultCheckIds = simulator?.simulator_parameters
        ? simulator?.simulator_parameters.map(
            (parameter: ISimulatorParameters) => parameter.failureTypeId
          )
        : [];

      setCheckedIds(defaultCheckIds);
    }
  }, [simulator]);

  const onSaveClick = () => {
    let variables: ISimulatorRequest = {
      simulator: {
        simulatorName: simulatorRequest.simulatorName,
        expectedSoundValue: simulatorRequest.expectedSoundValue,
        expectedTemperatureValue: simulatorRequest.expectedTemperatureValue,
        expectedVibrationValue: simulatorRequest.expectedVibrationValue
      }
    };

    if (isSimulatorEdit) {
      variables = {
        ...variables,
        id: simulator?.id as number
      };
    }

    addSimulator({ variables })
      .then((result) => {
        const simulatorParameters: ISimulatorParameters[] = checkedIds.map(
          (id: number) => {
            return {
              simulatorId: result.data.insert_simulators_one.id as number,
              failureTypeId: id
            };
          }
        );
        setAlertSuccess(true);

        if (!isSimulatorEdit) {
          addSimulatorParameters({
            variables: {
              simulatorParameters
            }
          })
            .then((result) => {
              setAlertSuccess(true);

              if (!isSimulatorEdit) {
                setSimulatorRequest({
                  simulatorName: '',
                  expectedSoundValue: '',
                  expectedTemperatureValue: '',
                  expectedVibrationValue: ''
                });
                setCheckedIds([]);
              }
            })
            .catch((error) => {
              setAlertSuccess(false);
            })
            .finally(() => {
              setAlertOpen(true);
            });
        } else {
          setAlertOpen(true);
        }
      })
      .catch((error) => {
        setAlertSuccess(false);
        setAlertOpen(true);
      });
  };

  React.useEffect(() => {
    if (data) {
      const formattedCheckboxListData: ICheckboxListData[] = data.failure_types
        ? data.failure_types.map((failureType: IFailureType) => {
            return {
              id: failureType.id as number,
              name: failureType.failureName as string
            };
          })
        : [];

      setCheckboxListData(formattedCheckboxListData);
    } else if (error) {
    }
  }, [data, error]);

  return (
    <PageContainer
      pageIcon="fa-server"
      pageTitle={
        isSimulatorEdit
          ? t('simulator.editSimulator')
          : t('simulator.addSimulator')
      }
    >
      <FormCard>
        <InputField
          label={t('simulator.simulatorName')}
          variant="outlined"
          fullWidth
          size="small"
          value={simulatorRequest?.simulatorName}
          onChange={(e) =>
            setSimulatorRequest({
              ...simulatorRequest,
              simulatorName: e.target?.value
            })
          }
        />
        <InputField
          label={t('simulator.expectedTemperatureValue')}
          variant="outlined"
          fullWidth
          size="small"
          type="number"
          value={simulatorRequest?.expectedTemperatureValue}
          onChange={(e) =>
            setSimulatorRequest({
              ...simulatorRequest,
              expectedTemperatureValue: Number(e.target?.value)
            })
          }
        />
        <InputField
          label={t('simulator.expectedSoundValue')}
          variant="outlined"
          fullWidth
          size="small"
          type="number"
          value={simulatorRequest?.expectedSoundValue}
          onChange={(e) =>
            setSimulatorRequest({
              ...simulatorRequest,
              expectedSoundValue: Number(e.target?.value)
            })
          }
        />
        <InputField
          label={t('simulator.expectedVibrationValue')}
          variant="outlined"
          fullWidth
          size="small"
          type="number"
          value={simulatorRequest?.expectedVibrationValue}
          onChange={(e) =>
            setSimulatorRequest({
              ...simulatorRequest,
              expectedVibrationValue: Number(e.target?.value)
            })
          }
        />
        <CheckboxList
          data={checkboxListData}
          title={t('simulator.checkBoxListTitle')}
          disabled={isSimulatorEdit}
          defaultCheckedIds={checkedIds}
          setCheckedIds={(checkedIds: number[]) => setCheckedIds(checkedIds)}
        ></CheckboxList>
        <AddSimulatorButtonContainer>
          <SaveButton onClick={() => onSaveClick()}>
            {isSimulatorEdit
              ? t('general.saveChanges')
              : t('simulator.generateSimulatorData')}
          </SaveButton>
          {isSimulatorEdit ? (
            <CancelButton onClick={() => router.replace('/simulators')}>
              {t('general.cancel')}
            </CancelButton>
          ) : (
            ''
          )}
        </AddSimulatorButtonContainer>
      </FormCard>
      <AlertMessage
        openState={alertOpen}
        description={
          isSimulatorEdit
            ? alertSuccess
              ? t('simulator.editSuccessMessage')
              : t('simulator.editErrorMessage')
            : alertSuccess
            ? t('simulator.addSuccessMessage')
            : t('simulator.addErrorMessage')
        }
        alertSuccess={alertSuccess}
        onClose={() => setAlertOpen(false)}
      ></AlertMessage>
    </PageContainer>
  );
}
