import React from 'react';
import { Container, HeaderContainer, HeaderIcon, HeaderTitle } from './_styles';
import { IPageContainer } from './_types';

export const PageContainer = ({
  pageTitle,
  pageIcon,
  children
}: IPageContainer) => {
  return (
    <Container>
      <HeaderContainer>
        <HeaderTitle>{pageTitle}</HeaderTitle>
        <HeaderIcon baseClassName="fa-solid" className={pageIcon} />
      </HeaderContainer>
      {children}
    </Container>
  );
};
