import React from "react";
import Visitor from "./components/visitor";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Visitor/>
    </div>
  );
}

export default App;