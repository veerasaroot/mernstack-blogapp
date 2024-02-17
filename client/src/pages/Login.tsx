import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { FormEvent } from 'react'
import Swal from 'sweetalert2'

function Login() {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    fetch
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({
        email: data.get('email'),
        password: data.get('password')
      })
    })

    const responseData = await response.json()

    if (responseData.type == 'Error') {
      Swal.fire({
        title: 'Error',
        text: responseData.message,
        icon: 'error'
      })
    } else {
      sessionStorage.setItem('credentials', JSON.stringify(responseData))
      window.location.href = '/'
    }
  }

  return (
    <div>
      <Container component={'main'} maxWidth={'xs'}>
        <CssBaseline />
        <Box sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component={'h1'} variant={'h5'}>
            Sign in
          </Typography>
          <Box component={'form'} onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField margin={'normal'} required fullWidth id='email' label='Email Address' name='email' autoComplete='email' autoFocus />
            <TextField margin={'normal'} required fullWidth id='password' label='Password' name='password' autoComplete='current-password' autoFocus type={'password'} />
            <FormControlLabel
              control={<Checkbox value='remember' color={'primary'} />}
              label='Remember me'
            />
            <Button
              type={'submit'}
              fullWidth
              variant={'contained'}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href='#' variant='body2'>
                  {'Don’t have an account? Sign Up'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default Login