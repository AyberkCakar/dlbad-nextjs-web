import { Button, FormControl } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AddButton = styled(Button)`
  align-self: flex-start;
  height: 40px;
  text-transform: none;
  display: flex !important;
  &::first-letter {
    text-transform: uppercase;
  }
  & {
    text-transform: none;
  }
`;

export const SearchFormControl = styled(FormControl)`
  margin-bottom: 20px;
  width: 25ch;
  align-self: flex-end;
`;

export const DataGridConteiner = styled.div`
  height: 500px;
  width: 100%;
`;
