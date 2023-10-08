import React from 'react';
import { GlobalStyle, LayoutBase } from './_style';
import { useTheme } from '../../hooks/useTheme';
import { Footer } from '../footer';
import { Header } from '../header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  return (
    <LayoutBase>
      <Header />
      <GlobalStyle
        backgroundColor={theme.colors.primaryBackgroundColor as string}
      />
      {children}
      <Footer />
    </LayoutBase>
  );
};

export default Layout;
