import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import indigo from '@material-ui/core/colors/indigo'
// import cyan from '@material-ui/core/colors/cyan'

import DefaultLayout from './layouts/DefaultLayout'
import LoginLayout from './layouts/LoginLayout'

import HomePage from './pages/HomePage'
import ToolsPage from './pages/ToolsPage'
import ToolPage from './pages/ToolPage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'

import { AuthProvider, ProtectedRoute } from './auth'

const theme = createMuiTheme({
  palette: {
    // type: 'dark',
    primary: {
      // main: cyan[800],
      main: '#2790A5',
    },
    secondary: {
      main: indigo[400],
      // main: '#C31F28',
    },
  },
})

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Router basename="/tdr-frontend-prototype">
            <Switch>
              <Route path="/login">
                <LoginLayout>
                  <Route path="/login">
                    <LoginPage />
                  </Route>
                </LoginLayout>
              </Route>
              <ProtectedRoute>
                <Route path="*">
                  <DefaultLayout>
                    <Switch>
                      <Route exact path="/">
                        <HomePage />
                      </Route>
                      <Route exact path="/tools">
                        <ToolsPage />
                      </Route>
                      <Route path="/tools/:slug">
                        <ToolPage />
                      </Route>
                      <Route path="*">
                        <NotFoundPage />
                      </Route>
                    </Switch>
                  </DefaultLayout>
                </Route>
              </ProtectedRoute>
            </Switch>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
