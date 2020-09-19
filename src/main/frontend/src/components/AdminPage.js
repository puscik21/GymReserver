import React, {useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from "axios";
import {Redirect} from "react-router-dom";
import {Alert} from "@material-ui/lab";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                This page is actually not made by me
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
        margin: theme.spacing(3, 0, 2),
    },
}));

export const AdminPage = () => {
    const classes = useStyles();
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [redirect, setRedirect] = useState(false)
    const [showSubmitMessage, setShowSubmitMessage] = useState(false)
    const [submitMessage, setSubmitMessage] = useState('success')

    useEffect(() => {
        const userId = localStorage.getItem('user')
        if (userId === null || userId === "null") {
            setRedirect(true)
        }
        axios.get('http://localhost:8080/user/' + userId)
            .then(res => {
                console.log(res)
                if (res.data === null || res.data === '') {
                    setRedirect(true)
                } else {
                    if (res.data.login !== 'admin') {
                        setRedirect(true)
                    }
                }
            })
            .catch(res => {
                console.log('Error while checking admin')
                console.log(res)
            })
    }, [])

    const handleSignUp = (event) => {
        event.preventDefault()
        const trainerCredentials = {
            name: name,
            surname: surname,
            login: login,
            password: password
        }
        axios.post('http://localhost:8080/trainer/', trainerCredentials)
            .then(res => {
                if (res.status === 200) {
                    // localStorage.setItem('user', res.data);
                    // setRedirect(true)
                    setShowSubmitMessage(true)
                    setSubmitMessage('success')
                }
            }).catch((res) => {
            console.log(res)
            setShowSubmitMessage(true)
            setSubmitMessage('fail')
        })
    }

    const ResultMessage = () => {
        setTimeout(() => {
            setShowSubmitMessage(false)
        }, 3000)
        if (submitMessage === 'success') {
            return <Alert style={{marginTop: '2em'}} variant="filled" severity="success">Successful trainer
                registration!</Alert>
        } else if (submitMessage === 'fail') {
            return <Alert style={{marginTop: '2em'}} variant="filled" severity="error">Error while adding
                trainer!</Alert>
        }
    }


    if (redirect) {
        return <Redirect to='/main/trainers'/>
    } else {
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <BuildOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Add new trainers to the gym!
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={handleSignUp}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    onChange={event => setName(event.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
                                    onChange={event => setSurname(event.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="login"
                                    label="Login"
                                    name="email"
                                    autoComplete="email"
                                    onChange={event => setLogin(event.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={event => setPassword(event.target.value)}
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
                            Add trainer
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="/main/trainers" variant="body2">
                                    Move back to the website
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={5}>
                    <Copyright/>
                </Box>
                {showSubmitMessage ? <ResultMessage/> : null}
            </Container>
        );
    }
}