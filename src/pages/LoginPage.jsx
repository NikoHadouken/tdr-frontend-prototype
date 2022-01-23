import React from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { Box, Link, Grid, Button, Typography } from '@mui/material'
import LoginForm from '@/components/auth/LoginForm'

const LoginPage = () => {
  const navigate = useNavigate()

  return (
    <Grid container justify="center">
      <Grid item>
        <Link
          component={RouterLink}
          underline="none"
          color="textPrimary"
          to="/"
        >
          <Typography
            sx={{
              margin: 5,
              textAlign: 'center',
            }}
          >
            RadioloG
          </Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            maxWidth: '600px',
            margin: 'auto',
          }}
        >
          <LoginForm />
          <Button
            onClick={navigate(-1)}
            sx={{
              marginTop: 3,
            }}
          >
            ← Zurück
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default LoginPage
