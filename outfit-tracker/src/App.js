// // import logo from './logo.svg';
import './App.css';
import React from 'react';
import Instructions from './Instructions';
import Header from './Header';
import {Route, Routes} from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { BrowserRouter as router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route index element={
        <main>
        <Header/>
      <Instructions/>
    </main>
       } />
      <Route path={"/Login"} element={
        <div>Login Page</div>
      }/>
      <Route path={"/Register"} element={
        <div>Register Page</div>
      }/>
    </Routes>
  );
}
export default App;



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