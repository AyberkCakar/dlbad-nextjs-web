import React from 'react';

export interface IFormModal {
  openState: boolean;
  onClose: () => void;
  onSave: (event: any) => void;
  children: React.ReactNode;
  modalTitle: string;
}
