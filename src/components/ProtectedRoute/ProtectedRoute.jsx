import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import {useSelector} from 'react-redux';

function ProtectedRoute({ component, children, ...props }) {
  const user = useSelector((store) => store.user);
  const ProtectedComponent = component || (() => children);
  return (
    <Route
      {...props}
    >
      {user._id ?
        <ProtectedComponent />
        :
        <LoginPage />
      }
    </Route>
  );
}

export default ProtectedRoute;
