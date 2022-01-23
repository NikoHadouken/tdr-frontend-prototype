import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  FormControl,
  Input,
  InputLabel,
  Button,
  IconButton,
  InputAdornment,
  CircularProgress,
  Card,
  CardContent,
  FormGroup,
  Box,
} from '@mui/material'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Visibility from '@mui/icons-material/Visibility'

import { useAuth } from '@/auth/use-auth'

const inputStyles = {
  margin: 2,
  width: '300px',
  color: 'inherit',
}

const LoginForm = () => {
  const auth = useAuth()
  const navigate = useNavigate()
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
      navigate(redirectTo)
    }
  }

  return (
    <Card
      variant="outlined"
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <FormControl sx={inputStyles}>
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
              <FormControl sx={inputStyles}>
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
            <div
              sx={{
                margin: 2,
                position: 'relative',
              }}
            >
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                sx={inputStyles}
                disabled={isLoading}
              >
                Login
                {isLoading && (
                  <CircularProgress
                    size={18}
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      marginTop: -12,
                      marginLeft: -12,
                    }}
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
