import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Login';
import Home from './Home';

const App = ({ user, login, logout }) => {
  const existingUsers = ['Alice', 'Bob', 'Charlie'];

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login existingUsers={existingUsers} login={login} />} />
        <Route 
          path="/home" 
          element={user ? <Home user={user} logout={logout} /> : <Navigate to="/login" />} 
        />
        <Route path="/" element={user ? <Navigate to="/home" /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDispatchToProps = (dispatch) => ({
  login: (username) => dispatch({ type: 'LOGIN', payload: username }),
  logout: () => dispatch({ type: 'LOGOUT' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
