import { IDynamic } from "./dynamic";

export enum Theme {
  LIGHT = "LIGHT",
  DARK = "DARK",
}

export interface ITheme {
  colors: IDynamic;
  font: IDynamic;
  typeScale: IDynamic;
}

export interface IThemeProvider {
  theme: ITheme;
  setTheme: (currentTheme: Theme) => void;
  toggleTheme: () => void;
  isTheme: Theme;
}
