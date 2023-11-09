import React from 'react';
import { useTranslation } from '../../../hooks/useTranslation';
import { RunAlgorithmsButtonContainer } from './_styles';
import CheckboxList from '../../checkbox-list';
import {
  GET_DATASETS,
  GET_ALGORITHMS,
  INSERT_RUN_ALGORITHMS
} from './_graphql';
import { useMutation, useSuspenseQuery } from '@apollo/client';
import { ICheckboxListData } from '../../checkbox-list/_type';
import { AlertMessage } from '../../alert';
import { PageContainer } from '../../page-container';
import { FormCard } from '../../form-card';
import { SaveButton } from '../../form-card/styles';
import { IOption } from '../../dropdown/_types';
import Dropdown from '../../dropdown';
import {
  IGroupedDataset,
  IGetAlgorithm,
  IDatasets,
  IRunAlgorithm,
  IRunAlgorithmRequest,
  IRunAlgorithmVariables
} from './_types';
import { IAlgorithm } from '../algorithms/_types';

export default function RunAlgorithmsPage() {
  const { t } = useTranslation();
  const [runAlgorithmRequest, setRunAlgorithmRequest] =
    React.useState<IRunAlgorithmRequest>({
      datasetId: 0,
      algorithmsIds: [],
      isRealDataset: false
    });

  const [alertOpen, setAlertOpen] = React.useState<boolean>(false);
  const [alertSuccess, setAlertSuccess] = React.useState<boolean>(false);
  const [checkboxListData, setCheckboxListData] = React.useState<
    ICheckboxListData[]
  >([]);

  const [dropdownData, setDropdownData] = React.useState<IOption[]>([]);
  const [checkedIds, setCheckedIds] = React.useState<number[]>([]);

  const { data, error } = useSuspenseQuery<IDatasets>(GET_DATASETS);
  const getAlgoritmhs = useSuspenseQuery<IGetAlgorithm>(GET_ALGORITHMS);

  const [runAlgoritmhs] = useMutation(INSERT_RUN_ALGORITHMS);

  const onSaveClick = () => {
    const algorithm_settings: IRunAlgorithm[] =
      runAlgorithmRequest.algorithmsIds.map((algorithmId: number) => {
        return {
          algorithmId: algorithmId,
          [runAlgorithmRequest.isRealDataset ? 'realDatasetId' : 'simulatorId']:
            runAlgorithmRequest.datasetId
        };
      });

    let variables: IRunAlgorithmVariables = {
      algorithm_settings
    };

    runAlgoritmhs({ variables })
      .then(() => {
        setAlertSuccess(true);
      })
      .catch(() => {
        setAlertSuccess(false);
      })
      .finally(() => {
        setAlertOpen(true);
      });
  };

  React.useEffect(() => {
    if (data) {
      const { real_datasets, simulators } = data;
      const concatData: IGroupedDataset[] = real_datasets.concat(simulators);
      const allData: IOption[] = concatData.map((dataset: IGroupedDataset) => {
        const isRealDataset: boolean = dataset.__typename === 'real_datasets';
        return {
          id: `${dataset.id}_${isRealDataset ? 'real' : 'simulator'}`,
          name: isRealDataset
            ? dataset.datasetName + ' - Real Dataset'
            : dataset.simulatorName + ' - Simulator Dataset'
        };
      });

      setDropdownData(allData);
    } else if (error) {
    }
  }, [data, error]);

  React.useEffect(() => {
    if (getAlgoritmhs.data) {
      const algorithmData: ICheckboxListData[] =
        getAlgoritmhs.data.algorithms.map((algorithm: IAlgorithm) => {
          return {
            id: algorithm.id,
            name: algorithm.algorithmName
          };
        }) as ICheckboxListData[];

      setCheckboxListData(algorithmData);
    } else if (getAlgoritmhs.error) {
    }
  }, [getAlgoritmhs]);

  return (
    <PageContainer
      pageIcon="fa-rocket"
      pageTitle={t('runAlgorithms.pageTitle')}
    >
      <FormCard>
        <Dropdown
          style={{ width: '40%' }}
          size="small"
          labelSize="small"
          label={t('runAlgorithms.datatable')}
          options={dropdownData}
          valueChange={(id: number | string) => {
            const idSplit: string[] = id.toString().split('_');
            setRunAlgorithmRequest({
              ...runAlgorithmRequest,
              datasetId: Number(idSplit[0]),
              isRealDataset: idSplit[1] === 'real' ? true : false
            });
          }}
        ></Dropdown>
        <CheckboxList
          data={checkboxListData}
          title={t('runAlgorithms.algortihms')}
          defaultCheckedIds={checkedIds}
          setCheckedIds={(checkedIds: number[]) => {
            setCheckedIds(checkedIds);
            setRunAlgorithmRequest({
              ...runAlgorithmRequest,
              algorithmsIds: checkedIds
            });
          }}
        ></CheckboxList>
        <RunAlgorithmsButtonContainer>
          <SaveButton onClick={() => onSaveClick()}>
            {t('runAlgorithms.runAlgorithms.button')}
          </SaveButton>
        </RunAlgorithmsButtonContainer>
      </FormCard>
      <AlertMessage
        openState={alertOpen}
        description={
          alertSuccess
            ? t('runAlgorithms.runAlgorithms.successMessage')
            : t('runAlgorithms.runAlgorithms.errorMessage')
        }
        alertSuccess={alertSuccess}
        onClose={() => setAlertOpen(false)}
      ></AlertMessage>
    </PageContainer>
  );
}
