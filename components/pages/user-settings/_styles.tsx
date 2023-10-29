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
  border-top: 3px solid #ef5323;
  margin-bottom: 50px;
`;

export const FormBodyContainer = styled.div`
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-right: 20px;
  margin-left: 20px;
`;

export const InputField = styled(TextField)`
  margin-top: 30px;
  min-width: 49%;
  max-width: 49%;
  flex: 1;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  align-self: flex-end;
  width: 100%;
  text-align: right;
  margin-left: 20px;
  margin-bottom: 25px;
`;

export const SaveButton = styled(Button)`
  height: 36px;
  background-color: #007bff;
  color: #fff;
  &:hover {
    background-color: #0056b3;
  }
`;

export const PageHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-self: normal;
  justify-content: space-between;
  width: 95%;
  margin: 0 auto;
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
  width: 55px;
`;
