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
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function App() {
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const employee = useSelector(store => store.employee);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' })
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Header/>
        <Routes>
          <Route path="/" exact element={!user._id ? <Navigate  to="/login" /> : <Home />} />
          <Route path="/login" exact element={user._id ? <Navigate  to="/" /> : <LoginPage />} />
          <Route path="/registration" exact element={user._id ? <Navigate  to="/" /> : <RegisterPage />} />
          <Route path="/detail/:id" exact element={!user._id ? <Navigate  to="/detail" /> : <Detail />} />
          <Route path="/add" exact element= { user.userRole === "admin" && <AddEmployee />} />
          <Route path="/edit/:id" exact element= { user.userRole === "admin" && <AddEmployee />} />
          <Route path='*' element={<h1> 404 : PAGE NOT FOUND </h1>} />
        </Routes>
      <Footer/>
      </Router>
    </ThemeProvider>
  );
}

export default App;
