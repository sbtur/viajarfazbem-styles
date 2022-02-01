import { createGlobalStyle } from 'styled-components';
import * as typography from './typography';
import colors from './colors';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    font-size: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -moz-osx-font-smoothing: grayscale;
  }

  body, input, textarea, select, button {
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }

  label,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    font-size: ${typography.fontSize[300]};
    line-height: ${typography.lineHeight.medium};
    color: ${colors.grey[500]};
    margin: 0;
  }
`;

export default GlobalStyle;
