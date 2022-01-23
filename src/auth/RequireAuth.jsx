/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './use-auth'

const RequireAuth = ({ children, redirectTo }) => {
  const { user, error } = useAuth()
  const location = useLocation()
  if (user) {
    return <>{children}</>
  }
  if (error) {
    return <p>...error</p>
  }
  return (
    <Navigate
      to={{
        pathname: redirectTo,
      }}
      state={{ from: location }}
    />
  )
}

export default RequireAuth
