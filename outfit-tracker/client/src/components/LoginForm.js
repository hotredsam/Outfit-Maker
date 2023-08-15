import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../actions/authActions'; // Create this action

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogin = () => {
    const loginData = {
      username,
      password,
    };
    
    dispatch(login(loginData));
    // Clear the form fields after login attempt
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginForm;
