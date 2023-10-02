import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { IGlobalStyle } from "./_type";

export const GlobalStyle = createGlobalStyle<IGlobalStyle>`
  body {
    background-color: ${(props) => props.backgroundColor};
    margin: 0;
    padding: 0;
  }
`;

export const LayoutBase = styled.div``;
