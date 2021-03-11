import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link as RouterLink } from 'react-router-dom'

import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}))

const HomePage = () => {
  const classes = useStyles()
  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        component={RouterLink}
        to="/tools/sins"
        className={classes.button}
      >
        SINS
      </Button>
    </div>
  )
}

export default HomePage
