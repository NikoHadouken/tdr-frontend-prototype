import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'inherit',
  },
  title: {
    flexGrow: 1,
    color: 'inherit',
  },
}))

const Header = () => {
  const classes = useStyles()
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Link
          component={RouterLink}
          to="/"
          className={classes.title}
          underline="none"
        >
          Tools for Diagnostic Radiology
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Header
