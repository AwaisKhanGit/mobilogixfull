import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import Button from '@mui/material/Button'
import { useNavigate } from "react-router-dom";

function LoginPage() {
  let navigate = useNavigate();

  return (
    <div>
      <LoginForm />
      <center>
        <Button
          variant = "contained"
          onClick={() => {
            navigate('/registration');
          }}
        >
          Register
        </Button>
      </center>
    </div>
  );
}

export default LoginPage;
