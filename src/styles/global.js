import {createGlobalStyle} from 'styled-components'
import reset from 'styled-reset'


export const GlobalStyle = createGlobalStyle`
  ${reset}

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    font-family: sans-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #eff3f7;
  }


`
