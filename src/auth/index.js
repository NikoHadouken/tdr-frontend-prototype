/* eslint-disable react/jsx-filename-extension */
import React, { useState, createContext, useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'

import authApi from './fakeAuth'

/** For more details on
 * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
 * refer to: https://usehooks.com/useAuth/
 */
const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

function useAuthProvider() {
  const [user, setUser] = useState(null)
  const isLoggedIn = user !== null

  const login = async (credentials, onError) => {
    if (isLoggedIn) {
      return user
    }
    try {
      const userData = await authApi.login(credentials)
      setUser(userData)
      return userData
    } catch (err) {
      onError(err)
    }
    return null
  }

  const logout = async (onError) => {
    setUser(null)
    try {
      await authApi.logout()
    } catch (err) {
      onError(err)
    }
  }

  return {
    isLoggedIn,
    user,
    login,
    logout,
  }
}

export const AuthProvider = ({ children }) => {
  const auth = useAuthProvider()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export const ProtectedRoute = ({ children, ...props }) => {
  const auth = useAuth()
  return (
    <Route
      {...props}
      render={({ location }) =>
        auth.isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}
