import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAccount } from '../components/accountActions.js'; // Create this action

// Define your styles
const styles = {
    container: {
        width: '300px',
        margin: 'auto',
        padding: '20px',
        backgroundColor: '#f0f0f0',
        border: '1px solid #ddd',
        borderRadius: '5px',
    },
    input: {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    button: {
        width: '100%',
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '14px 20px',
        margin: '10px 0',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    }
};

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
        <div style={styles.container}>
            <h2>Create Account</h2>
            <input
                style={styles.input}
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
            />
            {/* Apply styles to other elements similarly */}
            <input
                style={styles.input}
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
            />
            <input
                style={styles.input}
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                style={styles.input}
                type="text"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <input
                style={styles.input}
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button style={styles.button} onClick={handleCreateAccount}>Create Account</button>
        </div>
    );
}

export default CreateAccountForm;
