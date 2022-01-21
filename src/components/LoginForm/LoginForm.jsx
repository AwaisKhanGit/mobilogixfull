import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  mainContainer: {
    marginTop:"2rem",
    marginBottom:"1rem"
  },
});

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();
  const classes = useStyles()

  const login = () => {
    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }


  return (  
    <Grid container direction="column" alignContent="center" spacing={2} className = {classes.mainContainer} >
    <Grid item>
    <Typography variant="h5">Login</Typography>
    </Grid>
    {errors.loginMessage && (
      <Grid item>
         <Typography variant="h6" className="alert" role="alert" >{errors.loginMessage}</Typography>
      </Grid>
    )} 
      <Grid item>
        <TextField
            label="Enter Username"
            value={username}
            type="text"
            required
            onChange={(event) => setUsername(event.target.value)}
          />
      </Grid>
      <Grid item>
        <TextField
            label="Enter Password"
            value={password}
            type="password"
            required
            onChange={(event) => setPassword(event.target.value)}
          />
      </Grid>
      <Grid item>
          <Button onClick={login} variant="contained" disabled={!username && !password}>Login</Button>
      </Grid>
    </Grid>

  );
}

export default LoginForm;
