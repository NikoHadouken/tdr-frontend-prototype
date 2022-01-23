import React, { useEffect } from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ScoreIcon from '@mui/icons-material/Score'
import HomeIcon from '@mui/icons-material/Home'

import { useDisclosure } from '@/hooks/use-disclosure'
import { useAuth } from '../../auth/use-auth'

const drawerWidth = 240

const ContentBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isDrawerOpen',
})(({ theme, isDrawerOpen }) => ({
  flexGrow: 1,
  padding: 3,
  marginTop: 7,
  [theme.breakpoints.up('md')]: {
    marginLeft: isDrawerOpen ? 0 : -drawerWidth,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // ...(isDrawerOpen && {
    //   transition: theme.transitions.create('margin', {
    //     easing: theme.transitions.easing.easeOut,
    //     duration: theme.transitions.duration.enteringScreen,
    //   }),
    // }),
  },
}))

const DefaultLayout = ({ children }) => {
  const theme = useTheme()
  const auth = useAuth()
  const navigate = useNavigate()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  const drawer = useDisclosure()

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
    navigate('/')
  }

  useEffect(() => {
    if (drawer.isOpen !== undefined) {
      return
    }
    if (isDesktop) {
      drawer.open()
    }
  }, [isDesktop])

  const drawerContent = (isTemporary = false) => {
    const handleDrawerItemClick = (_e) => {
      if (isTemporary) {
        drawer.close()
      }
    }
    return (
      <>
        <Toolbar
          sx={{
            display: 'flex',
            py: 0,
            px: 2,
            justifyContent: 'end',
          }}
        >
          <Hidden mdUp implementation="js">
            <Box>
              <IconButton onClick={() => drawer.close()}>
                <ChevronLeftIcon />
              </IconButton>
            </Box>
          </Hidden>
        </Toolbar>

        <Divider />
        <List>
          <ListItem
            button
            component={RouterLink}
            to="/"
            onClick={handleDrawerItemClick}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
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

  const appBarMenu = () => {
    return (
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
    )
  }

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          ...(isDesktop && {
            zIndex: theme.zIndex.drawer + 1,
          }),
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => drawer.toggle()}
            edge="start"
            sx={{
              marginRight: 2,
            }}
          >
            <MenuIcon />
          </IconButton>
          <Link component={RouterLink} to="/" color="inherit" underline="none">
            <Typography variant="h6" noWrap>
              RadioloG
            </Typography>
          </Link>
          <Box
            sx={{
              flexGrow: 1,
            }}
          />
          {auth.isLoggedIn ? (
            <>{appBarMenu()}</>
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
            open={drawer.isOpen}
            onClose={() => drawer.close()}
            sx={{
              '& .MuiDrawer-paper': {
                width: drawerWidth,
              },
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawerContent(true)}
          </Drawer>
        </Hidden>
        {/* desktop drawer */}
        <Hidden mdDown implementation="js">
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
              },
            }}
            variant="persistent"
            anchor="left"
            open={drawer.isOpen}
          >
            {drawerContent(false)}
          </Drawer>
        </Hidden>
      </nav>
      <ContentBox isDrawerOpen={drawer.isOpen}>
        <Toolbar />
        <Container>{children}</Container>
      </ContentBox>
    </Box>
  )
}

export default DefaultLayout
