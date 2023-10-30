import * as React from 'react';
import { useMutation } from '@apollo/client';
import { FormModal } from '../../../modal';
import { useTranslation } from '../../../../hooks/useTranslation';
import { IAddRealDatasetVariable, IAddRealDatasetModal } from './_types';
import { IRealDataset } from '../_types';
import { ADD_DATASET, ADD_REAL_DATASET, UPDATE_REAL_DATASET } from './_graphql';
import { InputGroup, ModalInput, VisuallyHiddenInput } from './_styles';
import { Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { AlertMessage } from '../../../alert';

export default function AddRealDatasetModal({
  openState,
  onClose,
  saveResponse,
  realDataset
}: IAddRealDatasetModal) {
  const { t } = useTranslation();
  const [alertOpen, setAlertOpen] = React.useState<boolean>(false);
  const [alertSuccess, setAlertSuccess] = React.useState<boolean>(false);

  const [fileData, setFileData] = React.useState<any>();
  const [realDatasetRequest, setRealDatasetRequest] =
    React.useState<IRealDataset | null>({
      id: 0,
      datasetName: ''
    });

  React.useEffect(() => {
    setRealDatasetRequest(realDataset);
  }, [realDataset]);

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const [addRealDataset] = useMutation(
    realDataset ? UPDATE_REAL_DATASET : ADD_REAL_DATASET
  );

  const [addDataset] = useMutation(ADD_DATASET);

  const handleSave = () => {
    if (!realDatasetRequest) {
      return;
    }

    let variables: IAddRealDatasetVariable = {
      realDataset: { datasetName: realDatasetRequest.datasetName }
    };

    if (realDataset) {
      variables = { ...variables, id: realDatasetRequest.id };
    }

    addRealDataset({
      variables
    })
      .then(() => {
        addDataset({
          variables: { dataset: fileData }
        })
          .then(() => {
            setAlertSuccess(true);
            saveResponse(true);
          })
          .catch(() => {
            setAlertSuccess(false);
            saveResponse(false);
          })
          .finally(() => {
            setAlertOpen(true);
          });
      })
      .catch(() => {
        setAlertSuccess(false);
        saveResponse(false);
        setAlertOpen(true);
      });
  };

  const selectJsonFile = (value: string) => {
    // control

    setFileData(value);
  };

  return (
    <>
      <FormModal
        onSave={() => handleSave()}
        openState={openState}
        onClose={handleClose}
        modalTitle={
          realDataset
            ? t('realDataset.editModal.title')
            : t('realDataset.addModal.title')
        }
      >
        <InputGroup>
          <ModalInput
            style={{
              marginRight: realDataset ? '0' : '20px'
            }}
            label={t('realDataset.datasetName')}
            name="datasetName"
            variant="outlined"
            fullWidth
            size={'small'}
            required={true}
            value={realDatasetRequest?.datasetName}
            onChange={(e) =>
              setRealDatasetRequest({
                ...realDatasetRequest,
                datasetName: e.target?.value
              })
            }
          />
          <Button
            style={{
              minWidth: '250px',
              height: '40px',
              display: realDataset ? 'none' : 'flex'
            }}
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            {t('realDataset.uploadFile')}
            <VisuallyHiddenInput
              name="realData"
              onChange={(e) => selectJsonFile(e.target.value)}
              type="file"
              accept=".json"
            />
          </Button>
        </InputGroup>
      </FormModal>
      <AlertMessage
        openState={alertOpen}
        description={
          alertSuccess
            ? realDataset
              ? t('realDataset.editModal.successMessage')
              : t('realDataset.addModal.successMessage')
            : realDataset
            ? t('realDataset.editModal.errorMessage')
            : t('realDataset.addModal.errorMessage')
        }
        alertSuccess={alertSuccess}
        onClose={() => setAlertOpen(false)}
      ></AlertMessage>
    </>
  );
}
