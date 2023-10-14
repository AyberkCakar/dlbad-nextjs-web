import * as React from 'react';
import { ADD_FAILURE_TYPE, UPDATE_FAILURE_TYPE } from '../_graphql';
import { useMutation } from '@apollo/client';
import { FormModal } from '../../../modal/_template';
import { InputGroup, ModalInput, ModalInput2 } from './_style';

export default function AddFailureTypeModal({
  openState,
  onClose,
  saveResponse,
  failureType
}: {
  openState: any;
  onClose: any;
  saveResponse: any;
  failureType?: any | null;
}) {
  const [open, setOpenState] = React.useState<boolean>(false);

  const [failureTypesRequest, setFailureTypesRequest] = React.useState<any>({
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
    let variables: any = { failureType: failureTypesRequest };

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
    >
      <ModalInput
        name="failureName"
        label="Failure Name"
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
          label="Period"
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
              period: e.target?.value
            })
          }
        />
        <ModalInput
          label="Time Interval"
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
              timeInterval: e.target?.value
            })
          }
        />
      </InputGroup>

      <InputGroup>
        <ModalInput2
          label="Sound Anomaly Multiplier"
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
              soundAnomalyMultiplier: e.target?.value
            })
          }
        />
        <ModalInput2
          label="Temperature Anomaly Multiplier"
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
              temperatureAnomalyMultiplier: e.target?.value
            })
          }
        />
        <ModalInput
          label="Vibration Anomaly Multiplier"
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
              vibrationAnomalyMultiplier: e.target?.value
            })
          }
        />
      </InputGroup>
    </FormModal>
  );
}
