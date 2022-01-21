import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom";
import Home from '../Home/Home'
import LoginPage from '../LoginPage/LoginPage'
import RegisterPage from '../RegisterPage/RegisterPage'
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' })
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={user._id ? <Home /> : <LoginPage />} />
          <Route path="/registration" element={user._id ? <Home /> : <RegisterPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
