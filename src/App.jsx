import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

import Header from './layout/Header'
import Footer from './layout/Footer'

import HomePage from './pages/HomePage'
import ToolPage from './pages/ToolPage'

function App() {
  return (
    <div className="app">
      <Router basename="/tdr-frontend-prototype">
        <Header />
        <Box className="app-content" py={2}>
          <Container>
            <Route path="/" component={HomePage} exact />
            <Route path="/tools/:slug" component={ToolPage} />
          </Container>
        </Box>
        <Footer />
      </Router>
    </div>
  )
}

export default App
