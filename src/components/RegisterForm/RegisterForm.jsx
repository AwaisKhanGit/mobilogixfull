import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();


  const registerUser = () => {
    dispatch({
      type: 'REGISTER',
      payload: {
        username, password
      }
      });
  }

  return (
      <Grid container direction="column" spacing={2} alignContent="center">
        <Grid item>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3>
          {errors.registrationMessage}
        </h3>
      )}
      </Grid>

      <Grid item>
          <TextField
            label="Username"
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
        <Button disabled = { !username || !password}
        onClick={registerUser} variant="contained">Register</Button>
        </Grid>
      </Grid>
  );
}

export default RegisterForm;
