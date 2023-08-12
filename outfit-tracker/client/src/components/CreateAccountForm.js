import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAccount } from '../actions/accountActions'; // Create this action

function CreateAccountForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleCreateAccount = () => {
    const accountData = {
      firstName,
      lastName,
      email,
      username,
      password,
    };
    
    dispatch(createAccount(accountData));
    // Clear the form fields after account creation
    setFirstName('');
    setLastName('');
    setEmail('');
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h2>Create Account</h2>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
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
      <button onClick={handleCreateAccount}>Create Account</button>
    </div>
  );
}

export default CreateAccountForm;
