import React, { Component } from 'react'
import { Header } from './HeaderComponents/Header'
import { Homepage } from './HomeComponents/Homepage'
import { Registration } from './RegistrationComponents/Registration'
import { Registration1 } from './RegistrationComponents/Registration1'
import { Registration2 } from './RegistrationComponents/Registration2'
import { Footer } from './Footer'
import styled, { ThemeProvider } from 'styled-components'
import { Router } from '@reach/router'

import { theme } from './utils/theme'
import './utils/global'

const Container = styled.section`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  font-family: '${props => props.theme.fonts.primary}', sans-serif;

  header {
    border: 8px solid #ff6347;
  }

  main {
    border: 8px solid #568f56;

    h2, h3, h4,
    p, ul, ol, li, dl {
      color: ${props => props.theme.colors.arsenic}
      line-height: normal;
    }

    h2, h3, h4 {
      text-transform: uppercase;
    }

    h2 {
      font-size: 42px;
      font-weight: 400;
      letter-spacing: 2px;
    }

    > section {
      margin: 0;
      padding: 1rem;
    }
  }

  img {
    height: 75px;
  }
`

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Header />
          <Router>
            <Homepage path="/" />
            <Registration path="/registration" />
            <Registration1 path="/registration-1" />
            <Registration2 path="/registration-2" />
          </Router>
          <Footer />
        </Container>
      </ThemeProvider>
    )
  }
}

export default App
