import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { createTheme, ThemeProvider } from '@mui/material'
import indigo from '@mui/material/colors/indigo'
import pink from '@mui/material/colors/pink'

import DefaultLayout from '@/layouts/DefaultLayout'
import LoginLayout from '@/layouts/LoginLayout'

import HomePage from '@/pages/HomePage'
import ToolsPage from '@/pages/ToolsPage'
import ToolPage from '@/pages/ToolPage'
import LoginPage from '@/pages/LoginPage'
import NotFoundPage from '@/pages/NotFoundPage'
import AdminPage from '@/pages/AdminPage'

import { AuthProvider } from '@/auth/use-auth'
import RequireAuth from './auth/RequireAuth'

const theme = createTheme({
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

const App = () => {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Router basename="/tdr-frontend-prototype">
            <Routes>
              <Route
                path="/login"
                element={
                  <LoginLayout>
                    <LoginPage />
                  </LoginLayout>
                }
              />
              <Route
                path="*"
                element={
                  <DefaultLayout>
                    <Routes>
                      <Route
                        path="/admin"
                        element={
                          <RequireAuth>
                            <AdminPage />
                          </RequireAuth>
                        }
                      />
                      <Route exact path="/" element={<HomePage />} />
                      <Route exact path="/tools" element={<ToolsPage />} />
                      <Route path="/tools/:toolKey" element={<ToolPage />} />

                      <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                  </DefaultLayout>
                }
              />
            </Routes>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
