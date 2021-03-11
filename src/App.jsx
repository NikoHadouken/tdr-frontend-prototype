import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import indigo from '@material-ui/core/colors/indigo'
import cyan from '@material-ui/core/colors/cyan'

import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

import Header from './layout/Header'
import Footer from './layout/Footer'

import HomePage from './pages/HomePage'
import ToolPage from './pages/ToolPage'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: cyan[800],
    },
    secondary: {
      main: indigo[400],
    },
  },
})

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Router basename="/tdr-frontend-prototype">
          <Header />
          <Box className="app-content" py={10}>
            <Container>
              <Route path="/" component={HomePage} exact />
              <Route path="/tools/:slug" component={ToolPage} />
            </Container>
          </Box>
          <Footer />
        </Router>
      </ThemeProvider>
    </div>
  )
}

export default App
