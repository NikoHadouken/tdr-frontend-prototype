import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import CircularProgress from '@material-ui/core/CircularProgress'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import FormGroup from '@material-ui/core/FormGroup'
import Box from '@material-ui/core/Box'

import { useAuth } from '@/auth'

const useStyles = makeStyles((theme) => ({
  inputField: {
    margin: theme.spacing(2),
    width: '300px',
    color: 'inherit',
  },
  wrapper: {
    margin: theme.spacing(2),
    position: 'relative',
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  card: {
    justifyContent: 'center',
    dispaly: 'flex',
  },
}))

const LoginForm = () => {
  const classes = useStyles()
  const auth = useAuth()
  const history = useHistory()
  const location = useLocation()
  const redirectTo = location?.state?.from?.pathname || '/'

  const [isLoading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [credentials, setCredentials] = useState({
    email: 'john.doe@example.com',
    password: '12345',
  })

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    })
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const handleError = (_err) => {
    // console.log(err)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const user = await auth.login(credentials, handleError)
    setLoading(false)
    if (user) {
      history.push(redirectTo)
    }
  }

  return (
    <Card variant="outlined" className={classes.card}>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <FormControl className={classes.inputField}>
              <InputLabel htmlFor="email">E-Mail</InputLabel>
              <Input
                id="name"
                name="email"
                type="email"
                value={credentials.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormGroup>
              <FormControl className={classes.inputField}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </FormGroup>
            <div className={classes.wrapper}>
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                className={classes.inputField}
                disabled={isLoading}
              >
                Login
                {isLoading && (
                  <CircularProgress
                    size={18}
                    className={classes.buttonProgress}
                  />
                )}
              </Button>
            </div>
          </Box>
        </form>
      </CardContent>
    </Card>
  )
}

export default LoginForm
