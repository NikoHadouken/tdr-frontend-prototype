import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

import LoginForm from '../components/auth/LoginForm'

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(5),
  },
}))

const LoginPage = () => {
  const classes = useStyles()

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <h1 className={classes.title}>RadioloG</h1>
      <LoginForm />
    </Box>
  )
}

export default LoginPage
