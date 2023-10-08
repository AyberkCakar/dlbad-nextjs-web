import { Button, FormControl } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px 30px 20px 30px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props: { isAddButton: boolean }) =>
    props.isAddButton ? 'space-between' : 'flex-end'};
`;

export const AddButton = styled(Button)`
  align-self: flex-start;
  height: 40px;
  display: ${(props: { isAddButton: boolean }) =>
    props.isAddButton ? '' : 'none'};
  text-transform: none;
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
  display: ${(props: { isSearchable: boolean }) =>
    props.isSearchable ? '' : 'none'};
`;

export const DataGridConteiner = styled.div`
  height: 500px;
  width: 100%;
`;
