import React from 'react';
import { Container, HeaderContainer, HeaderIcon, HeaderTitle } from './_styles';
import { IPageContainer } from './_types';

export const PageContainer = ({
  pageTitle,
  pageIcon,
  children,
  baseClassName = 'fa-solid'
}: IPageContainer) => {
  return (
    <Container>
      <HeaderContainer>
        <HeaderTitle>{pageTitle}</HeaderTitle>
        <HeaderIcon baseClassName={baseClassName} className={pageIcon} />
      </HeaderContainer>
      {children}
    </Container>
  );
};
