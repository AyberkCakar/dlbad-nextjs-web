import React from 'react';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import {
  ModalActionContainer,
  ModalBody,
  ModalBox,
  CancelButton,
  ModalHeader,
  ModalHeaderTitle
} from './_styles';
import { IFormModal } from './_model';
import { useTranslation } from '../../hooks/useTranslation';

export const FormModal = ({
  openState,
  onClose,
  onSave,
  children,
  modalTitle
}: IFormModal) => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <div>
      <Modal
        open={openState}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-body"
      >
        <ModalBox>
          <ModalHeader>
            <ModalHeaderTitle variant="h4" id="modal-title">
              {modalTitle}
            </ModalHeaderTitle>
          </ModalHeader>
          <ModalBody id="modal-body">{children}</ModalBody>
          <ModalActionContainer>
            <Button variant="contained" color="primary" onClick={onSave}>
              {t('general.save')}
            </Button>
            <CancelButton variant="contained" onClick={handleClose}>
              {t('general.cancel')}
            </CancelButton>
          </ModalActionContainer>
        </ModalBox>
      </Modal>
    </div>
  );
};
