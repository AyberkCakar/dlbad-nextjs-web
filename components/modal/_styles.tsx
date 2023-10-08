import { Box, Button, Typography } from '@mui/material';
import styled from 'styled-components';

export const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  background-color: white;
`;

export const StyledHeader = styled.div`
  background-color: blue;
  padding: 20px;
  padding-left: 30px;
`;

export const StyledHeaderTitle = styled(Typography)`
  color: white;
`;

export const StyledBody = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 20px;
`;

export const StyledAction = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
  float: right;
`;

export const StyledCancelButton = styled(Button)`
  background-color: gray;
  margin-left: 10px;
  margin-right: 40px;

  :hover {
    background-color: #706e6e;
  }
`;
