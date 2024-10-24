import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = ({ existingUsers, login }) => {
  const [selectedUser, setSelectedUser] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (selectedUser) {
      login(selectedUser);
      navigate('/home');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
        <option value="">Select a user</option>
        {existingUsers.map((user) => (
          <option key={user} value={user}>{user}</option>
        ))}
      </select>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  login: (username) => dispatch({ type: 'LOGIN', payload: username }),
});

export default connect(null, mapDispatchToProps)(Login);
