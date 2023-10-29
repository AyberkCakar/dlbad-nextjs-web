import styled from 'styled-components';
import { Icon } from '@mui/material';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
