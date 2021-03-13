import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import indigo from '@material-ui/core/colors/indigo'
import pink from '@material-ui/core/colors/pink'
// import cyan from '@material-ui/core/colors/cyan'

import DefaultLayout from './layouts/DefaultLayout'
import LoginLayout from './layouts/LoginLayout'

import HomePage from './pages/HomePage'
import ToolsPage from './pages/ToolsPage'
import ToolPage from './pages/ToolPage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
import AdminPage from './pages/AdminPage'

import { AuthProvider, ProtectedRoute } from './auth'

const theme = createMuiTheme({
  palette: {
    // type: 'dark',
    primary: {
      // main: cyan[800],
      // main: '#2790A5',
      main: indigo[600],
    },
    secondary: {
      main: pink[600],
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
              <Route path="*">
                <DefaultLayout>
                  <Switch>
                    <ProtectedRoute path="/admin">
                      <AdminPage />
                    </ProtectedRoute>
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
            </Switch>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
