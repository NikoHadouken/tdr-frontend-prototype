import React from 'react'

import Button from '@material-ui/core/Button'

import { useAuth } from '../../auth'

const LogoutButton = () => {
  const auth = useAuth()

  return <Button onClick={() => auth.logout()}>Logout</Button>
}

export default LogoutButton
