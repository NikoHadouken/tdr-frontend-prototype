import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((_theme) => ({
  root: {
    // backgroundColor: theme.palette.primary.light,
    height: '100%',
  },
}))

const LoginLayout = ({ children }) => {
  const classes = useStyles()

  return <div className={classes.root}>{children}</div>
}

export default LoginLayout
