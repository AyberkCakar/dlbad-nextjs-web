import * as React from 'react';
import { ADD_FAILURE_TYPE, UPDATE_FAILURE_TYPE } from '../_graphql';
import { useMutation } from '@apollo/client';
import { FormModal } from '../../../modal';
import { InputGroup, ModalInput, GroupModalInput } from './_style';
import { IAddFailureTypeModal, IAddFailureVariable } from './_model';
import { IFailureType } from '../_model';
import { useTranslation } from '../../../../hooks/useTranslation';

export default function AddFailureTypeModal({
  openState,
  onClose,
  saveResponse,
  failureType
}: IAddFailureTypeModal) {
  const { t } = useTranslation();
  const defaultFailureType: IFailureType = {
    id: 0,
    failureName: '',
    period: '',
    timeInterval: '',
    soundAnomalyMultiplier: '',
    vibrationAnomalyMultiplier: '',
    temperatureAnomalyMultiplier: ''
  };

  const [failureTypeRequest, setFailureTypeRequest] =
    React.useState<IFailureType | null>(defaultFailureType);

  React.useEffect(() => {
    setFailureTypeRequest(failureType);
  }, [failureType]);

  const handleClose = () => {
    if (onClose) {
      setFailureTypeRequest(defaultFailureType);
      onClose();
    }
  };

  const [addFailureType] = useMutation(
    failureType ? UPDATE_FAILURE_TYPE : ADD_FAILURE_TYPE
  );

  const handleSave = () => {
    if (!failureTypeRequest) {
      return;
    }

    let variables: IAddFailureVariable = { failureType: failureTypeRequest };

    if (failureType) {
      variables = { ...variables, id: failureTypeRequest.id };
    }

    delete variables.failureType?.id;

    addFailureType({
      variables
    })
      .then((result) => {
        saveResponse(true);
      })
      .catch((error) => {
        saveResponse(false);
      })
      .finally(() => {
        setFailureTypeRequest(defaultFailureType);
      });
  };

  return (
    <FormModal
      onSave={() => handleSave()}
      openState={openState}
      onClose={handleClose}
      modalTitle={t('failureTypes.addFailureType')}
    >
      <ModalInput
        name="failureName"
        label={t('failureTypes.failureName')}
        variant="outlined"
        fullWidth
        size={'small'}
        required={true}
        value={failureTypeRequest?.failureName}
        onChange={(e) =>
          setFailureTypeRequest({
            ...failureTypeRequest,
            failureName: e.target?.value
          })
        }
      />

      <InputGroup>
        <GroupModalInput
          label={t('failureTypes.period')}
          name="period"
          variant="outlined"
          fullWidth
          size={'small'}
          type="number"
          required={true}
          value={failureTypeRequest?.period}
          onChange={(e) =>
            setFailureTypeRequest({
              ...failureTypeRequest,
              period: Number(e.target?.value)
            })
          }
        />
        <ModalInput
          label={t('failureTypes.timeInterval')}
          variant="outlined"
          name="timeInterval"
          fullWidth
          size={'small'}
          type="number"
          required={true}
          value={failureTypeRequest?.timeInterval}
          onChange={(e) =>
            setFailureTypeRequest({
              ...failureTypeRequest,
              timeInterval: Number(e.target?.value)
            })
          }
        />
      </InputGroup>

      <InputGroup>
        <GroupModalInput
          label={t('failureTypes.soundAnomalyMultiplier')}
          name="soundAnomalyMultiplier"
          variant="outlined"
          fullWidth
          size={'small'}
          type="number"
          required={true}
          value={failureTypeRequest?.soundAnomalyMultiplier}
          onChange={(e) =>
            setFailureTypeRequest({
              ...failureTypeRequest,
              soundAnomalyMultiplier: Number(e.target?.value)
            })
          }
        />
        <GroupModalInput
          label={t('failureTypes.temperatureAnomalyMultiplier')}
          name="temperatureAnomalyMultiplier"
          variant="outlined"
          fullWidth
          size={'small'}
          type="number"
          required={true}
          value={failureTypeRequest?.temperatureAnomalyMultiplier}
          onChange={(e) =>
            setFailureTypeRequest({
              ...failureTypeRequest,
              temperatureAnomalyMultiplier: Number(e.target?.value)
            })
          }
        />
        <ModalInput
          label={t('failureTypes.vibrationAnomalyMultiplier')}
          name="vibrationAnomalyMultiplier"
          variant="outlined"
          fullWidth
          size={'small'}
          type="number"
          required={true}
          value={failureTypeRequest?.vibrationAnomalyMultiplier}
          onChange={(e) =>
            setFailureTypeRequest({
              ...failureTypeRequest,
              vibrationAnomalyMultiplier: Number(e.target?.value)
            })
          }
        />
      </InputGroup>
    </FormModal>
  );
}
