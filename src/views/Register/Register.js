import React, { useContext, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { AccountManagementWrapper, RedirectLink } from 'styles/AccountManagement.css'

import { Navigate } from 'react-router-dom';
import { AuthContext } from 'hooks/Auth';


const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: theme.spacing(3),
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        height: 60,
        margin: theme.spacing(3, 0, 2),
    },    
}));


const Register = () => {
    const { user, register } = useContext(AuthContext);
    
    const classes = useStyles();
    
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isNameValid, setIsNameValid] = useState(true);
    const [isSurnameValid, setIsSurnameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    const validateName = () => {
        const regName = /[0-9]+/g;
        return ( !regName.test(name) && name.length > 2 )
    }

    const validateSurname = () => {
        const regName = /[0-9]+/g;
        return ( !regName.test(surname) && surname.length > 2 )
    }
  
    const validateEmail = () => {
        const regEmail = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return (regEmail.test(email) && email.length > 1);
    }

    const validatePassword = () => {
        return password.length > 4 && password.length < 30;
    }
    
    const validate = () => {
        let isValid = validateName()
                        && validateSurname()
                        && validateEmail()
                        && validatePassword();
        return isValid; 
    }

    const handleSubmitRegister = (e) => {
        e.preventDefault();

        validate() && register({email, password, firstName: name, lastName: surname})
    }

    return (
        <AccountManagementWrapper component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <PersonAddRoundedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Register
                </Typography>
                <form className={classes.form} onSubmit={handleSubmitRegister}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="name"
                                required
                                fullWidth
                                id="name"
                                label="First name"
                                onBlur={() => setIsNameValid(validateName())}
                                helperText={isNameValid ? null : "First name should be longer then 2 characters and should not contain numbers"}
                                error={!isNameValid}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="family-name"
                                required
                                fullWidth
                                id="lastName"
                                label="Last name"
                                name="lastName"
                                onBlur={() => setIsSurnameValid(validateSurname())}
                                helperText={isSurnameValid ? null : "Last name should be longer then 2 characters and should not contain numbers"}
                                error={!isSurnameValid}
                                onChange={(event) => setSurname(event.target.value)}
                            />
                        </Grid>
                        
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                onBlur={() => setIsEmailValid(validateEmail())}
                                helperText={isEmailValid ? null : "Email is not valid"}
                                error={!isEmailValid}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </Grid>
                        
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onBlur={() => setIsPasswordValid(validatePassword())}
                                helperText={isPasswordValid ? null :"Password should contain at least 4 characters"}
                                error={!isPasswordValid}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </Grid>
                    </Grid> 
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Register!
                    </Button>
                    <Grid container>
                        <Grid item>
                            <RedirectLink to="/login" >
                                Already have an account? Login!
                            </RedirectLink>
                        </Grid>
                    </Grid>
                </form>
            </div>
            { user && <Navigate to="/" />}

        </AccountManagementWrapper>
    );
}

export default Register;