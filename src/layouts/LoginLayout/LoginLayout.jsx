import React from 'react'

const LoginLayout = ({ children }) => {
  return (
    <div
      sx={{
        height: '100vh',
      }}
    >
      {children}
    </div>
  )
}

export default LoginLayout
