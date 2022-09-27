import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'

import { createTheme, ThemeProvider } from '@mui/material/styles'

import WovenImageList from './WovenImageList'
import Login from './Login'
import Subscriber from './components/Subscriber'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Deakin Dev
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const featuredArticle = ['Featured Article 1', 'Featured Article 2', 'Featured Article 3']
const featuredTutorial = ['Featured Tutorial 1', 'Featured Tutorial 2', 'Featured Tutorial 3']
const footers = [
  {
    title: 'Explore',
    description: ['Home', 'Questions', 'Articles', 'Tutorials']
  },
  {
    title: 'Support',
    description: ['FAQs', 'Help', 'Contact Us']
  },
  {
    title: 'Stay connected',
    description: ['Facebook', 'Twitter', 'Instagram']
  },
  {
    title: 'DEV@Deakin 2022',
    description: ['Privacy policy', 'Terms of use']
  }
]

const theme = createTheme()

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Deakin Dev
          </Typography>
          <TextField margin="normal" required size="small" label="Search Here" autoFocus />
          <nav>
            <Link variant="button" color="text.primary" href="#" sx={{ my: 1, mx: 1.5 }}>
              Features
            </Link>

            <Link variant="button" color="text.primary" href="#" sx={{ my: 1, mx: 1.5 }}>
              Post
            </Link>
          </nav>
          <Button href="/Login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6
          }}
        >
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
              DEV@Deakin
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              It is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
              letters
            </Typography>
            <WovenImageList></WovenImageList>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Typography component="h3" variant="h3" align="center" color="text.primary" gutterBottom>
            Featured Articles
          </Typography>
          <Grid container spacing={4}>
            {featuredArticle.map(featuredArticle => (
              <Grid item key={featuredArticle} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    sx={{
                      pt: '5.25%'
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {featuredArticle}
                    </Typography>
                    <Typography component="h4">Description: </Typography>
                    <Typography>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Typography component="h3" variant="h3" align="center" color="text.primary" gutterBottom>
            Featured Tutorials
          </Typography>
          <Grid container spacing={4}>
            {featuredTutorial.map(featuredTutorial => (
              <Grid item key={featuredTutorial} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    sx={{
                      pt: '5.25%'
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {featuredTutorial}
                    </Typography>
                    <Typography component="h4">Description: </Typography>
                    <Typography>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        {/* <SignUp></SignUp> */}
      </main>
      <Subscriber />
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: theme => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6]
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map(footer => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map(item => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </ThemeProvider>
  )
}
