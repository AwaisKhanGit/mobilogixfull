import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

function RegisterPage() {
  const navigate = useNavigate();

  return (
    <div>
      <RegisterForm />
      <center>
        <Button
          variant = "contained"
          onClick={() => {
            navigate('/login');
          }}
        >
          Login
        </Button>
      </center>
    </div>
  );
}

export default RegisterPage;
