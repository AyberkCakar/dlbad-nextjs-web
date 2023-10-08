import * as React from 'react';
import { ADD_FAILURE_TYPE, UPDATE_FAILURE_TYPE } from '../_graphql';
import { useMutation } from '@apollo/client';
import { FormModal } from '../../../modal';
import { InputGroup, ModalInput, ModalInput2 } from './_style';
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
  const [open, setOpenState] = React.useState<boolean>(false);

  const [failureTypesRequest, setFailureTypesRequest] =
    React.useState<IFailureType>({
      id: 0,
      failureName: '',
      period: 0,
      timeInterval: 0,
      soundAnomalyMultiplier: 0,
      vibrationAnomalyMultiplier: 0,
      temperatureAnomalyMultiplier: 0
    });

  React.useEffect(() => {
    if (failureType) {
      setFailureTypesRequest(failureType);
    }
  }, [failureType]);

  const handleClose = () => {
    setOpenState(false);
    if (onClose) {
      onClose();
    }
  };

  const [addFailureType] = useMutation(
    failureType ? UPDATE_FAILURE_TYPE : ADD_FAILURE_TYPE
  );

  const handleSave = () => {
    let variables: IAddFailureVariable = { failureType: failureTypesRequest };

    if (failureType) {
      variables = { ...variables, id: failureTypesRequest.id };
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
        value={failureTypesRequest.failureName}
        onChange={(e) =>
          setFailureTypesRequest({
            ...failureTypesRequest,
            failureName: e.target?.value
          })
        }
      />

      <InputGroup>
        <ModalInput2
          label={t('failureTypes.period')}
          name="period"
          variant="outlined"
          fullWidth
          size={'small'}
          type="number"
          required={true}
          value={failureTypesRequest.period}
          onChange={(e) =>
            setFailureTypesRequest({
              ...failureTypesRequest,
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
          value={failureTypesRequest.timeInterval}
          onChange={(e) =>
            setFailureTypesRequest({
              ...failureTypesRequest,
              timeInterval: Number(e.target?.value)
            })
          }
        />
      </InputGroup>

      <InputGroup>
        <ModalInput2
          label={t('failureTypes.soundAnomalyMultiplier')}
          name="soundAnomalyMultiplier"
          variant="outlined"
          fullWidth
          size={'small'}
          type="number"
          required={true}
          value={failureTypesRequest.soundAnomalyMultiplier}
          onChange={(e) =>
            setFailureTypesRequest({
              ...failureTypesRequest,
              soundAnomalyMultiplier: Number(e.target?.value)
            })
          }
        />
        <ModalInput2
          label={t('failureTypes.temperatureAnomalyMultiplier')}
          name="temperatureAnomalyMultiplier"
          variant="outlined"
          fullWidth
          size={'small'}
          type="number"
          required={true}
          value={failureTypesRequest.temperatureAnomalyMultiplier}
          onChange={(e) =>
            setFailureTypesRequest({
              ...failureTypesRequest,
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
          value={failureTypesRequest.vibrationAnomalyMultiplier}
          onChange={(e) =>
            setFailureTypesRequest({
              ...failureTypesRequest,
              vibrationAnomalyMultiplier: Number(e.target?.value)
            })
          }
        />
      </InputGroup>
    </FormModal>
  );
}
