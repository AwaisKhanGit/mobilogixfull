import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../ui/Theme";
import Home from '../Home/Home'
import LoginPage from '../LoginPage/LoginPage'
import RegisterPage from '../RegisterPage/RegisterPage'
import Detail from '../Detail/Detail'
import AddEmployee from '../AddEmployee/AddEmployee'


function App() {
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' })
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={!user._id ? <Navigate  to="/login" /> : <Home />} />
          <Route path="/login" exact element={user._id ? <Navigate  to="/" /> : <LoginPage />} />
          <Route path="/registration" exact element={user._id ? <Navigate  to="/" /> : <RegisterPage />} />
          <Route path="/detail/:id" exact element={!user._id ? <Navigate  to="/detail" /> : <Detail />} />
          <Route path="/add" exact element= { user.userRole === "admin" && <AddEmployee />} />
          <Route path="/edit/:id" exact element= { user.userRole === "admin" && <AddEmployee />} />
        </Routes>
      </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;
