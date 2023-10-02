import React from "react";
import { GlobalStyle, LayoutBase } from "./_style";
import { useTheme } from "../../hooks/useTheme";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  return (
    <LayoutBase>
      <GlobalStyle
        backgroundColor={theme.colors.primaryBackgroundColor as string}
      />
      {children}
    </LayoutBase>
  );
};

export default Layout;
