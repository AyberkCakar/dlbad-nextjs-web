import React from 'react';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import {
  StyledAction,
  StyledBody,
  StyledBox,
  StyledCancelButton,
  StyledHeader,
  StyledHeaderTitle
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
        <StyledBox>
          <StyledHeader>
            <StyledHeaderTitle variant="h4" id="modal-title">
              {modalTitle}
            </StyledHeaderTitle>
          </StyledHeader>
          <StyledBody id="modal-body">{children}</StyledBody>
          <StyledAction>
            <Button variant="contained" color="primary" onClick={onSave}>
              {t('general.save')}
            </Button>
            <StyledCancelButton variant="contained" onClick={handleClose}>
              {t('general.cancel')}
            </StyledCancelButton>
          </StyledAction>
        </StyledBox>
      </Modal>
    </div>
  );
};
