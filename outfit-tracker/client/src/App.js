import './App.css';
import React from 'react';
import Instructions from './Instructions';
import Header from './Header';
import {Route, Routes} from 'react-router-dom';
import { BrowserRouter as router, Link } from 'react-router-dom';

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