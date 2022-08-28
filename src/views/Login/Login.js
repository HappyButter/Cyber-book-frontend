import React, { useState, useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { SignInWrapper, CustomLink } from './login.css';
import { Navigate } from 'react-router-dom';

import {AuthContext, AuthProvider} from 'hooks/Auth';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(7),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: theme.spacing(7),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    height: 60,
    margin: theme.spacing(3, 0, 2),
  },
}));


const Login = () => {
  const {login, user} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const classes = useStyles();
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    login(email, password);  
  } 

  return (
    <SignInWrapper component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form 
          className={classes.form} 
          onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login!
          </Button>

          <Grid container>
            <Grid item>
              <CustomLink to="/register">
                {"Don't have an account yet? Register!"}
              </CustomLink>
            </Grid>
          </Grid>
        </form>
      </div>
    { user && <Navigate to="/" />}
    </SignInWrapper>
  );
}

export default Login;