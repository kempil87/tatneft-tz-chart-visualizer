import { createGlobalStyle } from 'styled-components';

const fontBaseUrl = `${import.meta.env.BASE_URL}fonts/Onest`;

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Onest;
    src: url('${fontBaseUrl}/Onest-Thin.woff2') format('woff2');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: Onest;
    src: url('${fontBaseUrl}/Onest-Light.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: Onest;
    src: url('${fontBaseUrl}/Onest-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: Onest;
    src: url('${fontBaseUrl}/Onest-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: Onest;
    src: url('${fontBaseUrl}/Onest-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: Onest;
    src: url('${fontBaseUrl}/Onest-ExtraBold.woff2') format('woff2');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: Onest;
    src: url('${fontBaseUrl}/Onest-Black.woff2') format('woff2');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    font-family: Onest, sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.foreground};
    line-height: 1.6;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    height: 100%;
  }

  #root {
    height: 100%;
  }
`;
