import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ScoreIcon from '@material-ui/icons/Score'
import Hidden from '@material-ui/core/Hidden'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom'

import { useAuth } from '../../auth'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    // backgroundColor: theme.palette.primary.dark,
    // color: 'white',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: theme.spacing(7),
    [theme.breakpoints.up('md')]: {
      marginLeft: -drawerWidth,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  },
  contentShift: {
    [theme.breakpoints.up('md')]: {
      marginLeft: 0,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  },
}))

const DefaultLayout = ({ children }) => {
  const classes = useStyles()
  const theme = useTheme()
  const auth = useAuth()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  const [open, setOpen] = useState(undefined)

  const [anchorEl, setAnchorEl] = React.useState(null)
  const menuOpen = Boolean(anchorEl)
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    auth.logout()
    setAnchorEl(null)
  }

  useEffect(() => {
    if (open !== undefined) {
      return
    }
    if (isDesktop) {
      setOpen(true)
    }
  }, [isDesktop])

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleDrawerToggle = () => {
    setOpen(!open)
  }

  const drawer = (isTemporary = false) => {
    const handleDrawerItemClick = (_e) => {
      if (isTemporary) {
        setOpen(false)
      }
    }
    return (
      <>
        <div className={classes.drawerHeader}>
          <Hidden mdUp implementation="js">
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </Hidden>
        </div>
        <Divider />
        <ListSubheader>
          <Link
            color="inherit"
            underline="none"
            component={RouterLink}
            to="/tools"
            onClick={handleDrawerItemClick}
          >
            Tools
          </Link>
        </ListSubheader>
        <List>
          {[
            {
              text: 'SINS',
              to: '/tools/sins',
              icon: ScoreIcon,
            },
          ].map(({ text, icon: Icon, to }) => {
            return (
              <ListItem
                button
                key={text}
                component={RouterLink}
                to={to}
                onClick={handleDrawerItemClick}
              >
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          })}
        </List>
      </>
    )
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            RadioloG
          </Typography>
          {auth.isLoggedIn ? (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={menuOpen}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                <MenuItem component={RouterLink} to="/admin">
                  Admin Panel
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <Button color="inherit" component={RouterLink} to="/login">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <nav>
        {/* mobile drawer - temporary */}
        <Hidden mdUp implementation="js">
          <Drawer
            variant="temporary"
            anchor="left"
            open={open}
            onClose={handleDrawerClose}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer(true)}
          </Drawer>
        </Hidden>
        {/* desktop drawer */}
        <Hidden smDown implementation="js">
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer(false)}
          </Drawer>
        </Hidden>
      </nav>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <Container>{children}</Container>
      </main>
    </div>
  )
}

export default DefaultLayout
