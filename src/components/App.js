import './App.css';
import React, { useState, useEffect } from 'react';
import SignUp from './Signup';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../context/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';

const App = () => {
  return (
    <Container
      className='d-flex align-items-center justify-content-center'
      style={{ minHeight: '100vh' }}
    >
      <div className='w-100' style={{ maxWidth: '400px' }}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path='/' component={Dashboard}></Route>
              <Route path='/signup' component={SignUp}></Route>
              <Route path='/login' component={Login}></Route>
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
};

export default App;
