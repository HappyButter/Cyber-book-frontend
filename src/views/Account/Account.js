import React, { useContext, useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { AccountDataWrapper } from './account.css';
import { Navigate } from 'react-router-dom';
import { AuthContext } from 'hooks/Auth';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: theme.spacing(10),
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



const Account = () => {
    const classes = useStyles();
    
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    
    const { user } = useContext(AuthContext);
    
    useEffect( () => {
        setName(user.firstName);
        setSurname(user.lastName);
        setEmail(user.email);
    },[user])

    return (
        <>
            <br/>
            <AccountDataWrapper component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <AccountCircleIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Account details
                </Typography>
                <form className={classes.form}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                disabled={true}
                                autoComplete="given-name"
                                name="name"
                                fullWidth
                                id="name"
                                label="First Name"
                                variant="filled"
                                value={name}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                disabled={true}
                                autoComplete="family-name"
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                variant="filled"
                                value={surname}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                disabled={true}
                                fullWidth
                                type="tel"
                                name="email"
                                label="Email"
                                id="phoneNumber"
                                variant="filled"
                                value={email}
                            />
                        </Grid>
                    </Grid>
                </form>
            </div>
            { !user && <Navigate to="/" />  }
        </AccountDataWrapper>
        </>
    );
};

export default Account;
