import React from 'react'
import { Link as RouterLink, useHistory } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import LoginForm from '@/components/auth/LoginForm'

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(5),
    textAlign: 'center',
  },
  wrapper: {
    maxWidth: '600px',
    margin: 'auto',
  },
  backLink: {
    marginTop: theme.spacing(3),
  },
}))

const LoginPage = () => {
  const classes = useStyles()
  const history = useHistory()

  return (
    <Grid container justify="center">
      <Grid item>
        <Link
          component={RouterLink}
          underline="none"
          color="textPrimary"
          to="/"
        >
          <h1 className={classes.title}>RadioloG</h1>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Box className={classes.wrapper}>
          <LoginForm />
          <Button onClick={history.goBack} className={classes.backLink}>
            ← Zurück
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default LoginPage
