import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOutfits } from './actions/outfitActions'; // Create this file
import CreateOutfitForm from './components/CreateOutfitForm';
import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CreateAccountForm from './components/CreateAccountForm';
import LoginForm from './components/LoginForm';

function App() {
  const outfits = useSelector(state => state.outfits);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOutfits());
  }, [dispatch]);

  return (
    <BrowserRouter>
    <div>
      <h1>View Outfits</h1>
      <ul>
        {outfits.map(outfit => (
          <li key={outfit.id}>{outfit.name}</li>
        ))}
      </ul>
      <Link to="/create">Create New Outfit</Link>
        <Link to="/upload">Upload Image</Link>
        <Link to="/create-account">Create Account</Link>
        <Link to="/login">Login</Link>
      </div>
      <Route path="/create" component={CreateOutfitForm} />
      <Route path="/upload" component={UploadImageForm} />
      <Route path="/create-account" component={CreateAccountForm} />
      <Route path="/login" component={LoginForm} />
    </BrowserRouter>
  );
}

export default App;


// // // import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import Instructions from './Instructions';
// import Header from './Header';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchOutfits } from './actions/outfitActions'; // Create this file

// function App() {
//   const outfits = useSelector(state => state.outfits);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchOutfits());
//   }, [dispatch]);

//   return (
//     <div>
//       <h1>View Outfits</h1>
//       <ul>
//         {outfits.map(outfit => (
//           <li key={outfit.id}>{outfit.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }


// function App() {
//   return (
//     <Routes>
//       <Route index element={
//         <main>
//         <Header/>
//       <Instructions/>
//     </main>
//        } />
//       <Route path={"/Login"} element={
//         <div>Login Page</div>
//       }/>
//       <Route path={"/Register"} element={
//         <div>Register Page</div>
//       }/>
//     </Routes>
//   );
// }
// export default App;



// className="App">
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>