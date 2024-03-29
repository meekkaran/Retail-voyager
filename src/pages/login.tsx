import * as React from 'react';
import Link from 'next/link';
import MuiLink from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Header from '../components/Header';

export default function SignIn() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div>
      {/* <Header /> */}
      <Container component="main" maxWidth="xs">
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography component="h1" variant="h5" sx={{ color: '#4CAF50' }}>RETAIL VOYAGER</Typography>
          <Typography component="h1" variant="h5" sx={{ color: '#000' }}>Welcome Back!</Typography>
          <Typography component="h1" variant="h5" sx={{ color: '#000' }}>Login to your Account</Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
            <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
            <FormControlLabel control={<Checkbox value="remember" sx={{ color: '#4CAF50', '&:hover': { color: '#45a049' } }} />} label="Remember me"/>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, backgroundColor: '#4CAF50', '&:hover': { backgroundColor: '#45a049' } }}>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <MuiLink href="#" variant="body2" sx={{ color: '#4CAF50', '&:hover': { color: '#45a049' } }}>Forgot password?</MuiLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
