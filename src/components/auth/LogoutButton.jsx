import React from 'react'

import { Button } from '@mui/material'

import { useAuth } from '@/auth'

const LogoutButton = () => {
  const auth = useAuth()

  return <Button onClick={() => auth.logout()}>Logout</Button>
}

export default LogoutButton
