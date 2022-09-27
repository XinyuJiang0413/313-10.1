import * as React from 'react';
import { useRef, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAuth } from './context/AuthContext'

const theme = createTheme();

export default function Register() {
    const lastNameRef = useRef()
    const givenNameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    const { signup, currentUser } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)




    async function handleSubmit(e) {
        e.preventDefault()
        const data = new FormData(e.currentTarget);
        // console.log({
        //     email: data.get('email'),
        //     password: data.get('password'),
        //     // passwordAgain, firstName, lastName
        // });


        if (data.get('password') !== data.get('passwordAgain')) {
            return setError('passwords not match, please check')
        }
        
        if(data.get('email') == ""){
            return setError('sorry the email cannot be empty')
        }

        try {
            setError('')
            setLoading(true)
            await signup(data.get('email'), data.get('password'))
            setError('success register, please goto login page')
        } catch {
            setError('fail to create account')
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
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Register Now
                    </Typography>
                    <Typography component="h1" variant="h5">
                        {error}
                    </Typography>
                    <Typography component="h1" variant="h5">
                        {currentUser && currentUser.email}
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    ref={givenNameRef}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    ref={lastNameRef}
                                    autoComplete="family-name"
                                />
                            </Grid>
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
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="passwordAgain"
                                    label="passwordAgain "
                                    name="passwordAgain"
                                    ref={passwordConfirmRef}
                                    type="password"
                                    autoComplete="passwordAgain"
                                />
                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            disabled={loading}
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            SUBMMIT
                        </Button>
                        <Button href="/Login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                            Login Now
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}