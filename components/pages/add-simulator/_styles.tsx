import styled from 'styled-components';
import { TextField, Button, Icon, List } from '@mui/material';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormContainer = styled.div`
  width: 95%;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-top: 3px solid #17a2b8;
  margin-bottom: 50px;
`;

export const FormBodyContainer = styled.div`
  margin: 20px 20px 20px 20px;
  flex-direction: row;
  display: flex;
`;

export const InputField = styled(TextField)`
  width: 50%;
  margin-right: 50px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  margin-right: 25px;
  margin-bottom: 25px;
`;

export const SaveButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
  margin-right: 10px;
  &:hover {
    background-color: #0056b3;
  }
`;

export const CancelButton = styled(Button)`
  background-color: #ccc;
  color: #000;
  &:hover {
    background-color: #999;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
  text-align: center;
`;

export const PageHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-self: normal;
  justify-content: space-between;
  width: 95%;
  margin: 0 auto; /* Sol ve sağ boşlukları eşit olarak ayarlayarak ortalamak için eklenen satır */
  color: #343a40 !important;
`;

export const PageHeaderTitle = styled.h1`
  font-weight: 500;
`;

export const PageHeaderIcon = styled(Icon)`
  font-size: 36px;
  display: flex;
  flex-direction: column;
  align-self: center;
  color: #6c757d !important;
`;

export const ListContainer = styled(List)`
  background-color: 'background.paper';
  height: 250px;
  overflow: hidden;
`;
