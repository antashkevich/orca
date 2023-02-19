import React from 'react';
import reset from 'styled-reset'
import styled, { createGlobalStyle } from 'styled-components'
import * as styles from './styles/variables'
import Content from './components/Content'
import Header from './components/Header'

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    font-family: "Mulish", sans-serif;
    font-size: 14px;
    color: $color-black;
    background-color: ${styles.color_bg};
    overflow-x: hidden;
    margin: 0 auto;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  p {
    line-height: 18px;
  }
  
  button {
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
  }
`

const Container = styled.div`
  max-width: 1256px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 16px;
  margin: 0 auto;
`

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <Header />
        <Content />
      </Container>
    </React.Fragment>
  );
}

export default App;
