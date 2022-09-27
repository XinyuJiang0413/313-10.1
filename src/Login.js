import * as React from 'react'
import { useRef, useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useAuth } from './context/AuthContext'

const theme = createTheme()

export default function Register() {
  const lastNameRef = useRef()
  const givenNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()

  const { signup, currentUser } = useAuth()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    // console.log({
    //     email: data.get('email'),
    //     password: data.get('password'),
    //     // passwordAgain, firstName, lastName
    // });
    if (data.get('email') == '') {
      return setError('sorry the email cannot be empty')
    }

    if (data.get('password') == '') {
      return setError('sorry the password cannot be empty')
    }

    try {
      setError('')
      setLoading(true)
      await login(data.get('email'), data.get('password'))
      const w = window.open('about:blank')
      w.location.href = '/'
    } catch {
      setError('sorry, login fail')
    }

    setLoading(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login Now
          </Typography>
          <Typography component="h1" variant="h5">
            {error}
          </Typography>
          <Typography component="h1" variant="h5">
            {currentUser && currentUser.email}
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  ref={emailRef}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="password"
                  label="password"
                  name="password"
                  ref={passwordRef}
                  type="password"
                  autoComplete="password"
                />
              </Grid>
            </Grid>
            <Button type="submit" disabled={loading} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Login
            </Button>
            <Button href="/Register" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
              Register
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
