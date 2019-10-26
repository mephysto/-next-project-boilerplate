import React, { Component } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Meta from "../components/Meta";

// Global themed styles
const theme = {
  red: "#FF0000",
  black: "333333",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};

// Styled CSS variable, used as a React element
const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

// Main styles
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Jomolhari|Roboto&display=swap');
  html {
    box-sizing: border-box;
    font-size: 16px;
  };
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body{
    /* font-family: 'Jomolhari', serif; */
    font-family: 'Roboto', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1rem;
    line-height: 1.5;
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Meta />
        <Inner>{this.props.children}</Inner>
      </ThemeProvider>
    );
  }
}
export default Page;
