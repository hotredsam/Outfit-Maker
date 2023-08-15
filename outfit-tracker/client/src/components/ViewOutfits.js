import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import CreateOutfitForm from './components/CreateOutfitForm';
import UploadImageForm from './components/UploadImageForm';
import CreateAccountForm from './components/CreateAccountForm';
import LoginForm from './components/LoginForm';
import ViewOutfits from './components/ViewOutfits'; // Ensure you import the correct path

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Your App Title</h1>
        <Link to="/create">Create New Outfit</Link>
        <Link to="/upload">Upload Image</Link>
        <Link to="/create-account">Create Account</Link>
        <Link to="/login">Login</Link>
        <Link to="/view-outfits">View Outfits</Link>

        <Route path="/create" component={CreateOutfitForm} />
        <Route path="/upload" component={UploadImageForm} />
        <Route path="/create-account" component={CreateAccountForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/view-outfits" component={ViewOutfits} />
      </div>
    </BrowserRouter>
  );
}

export default App;
