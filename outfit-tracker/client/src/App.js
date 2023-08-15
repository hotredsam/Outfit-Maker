import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/Dashboard'; // Adjust the path if necessary
import Navbar from './components/Navbar';
import CreateAccountForm from './pages/CreateAccount';
import CreateOutfit from './pages/CreateOutfit';

const App = () => {

  return (
    <Router>
      <Navbar>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/upload" element={<DashboardPage />} />
          <Route path="/viewitems" element={<DashboardPage />} />
          <Route path="/createoutfits" element={<CreateOutfit />} />
          <Route path="/viewoutfits" element={<DashboardPage />} />
          <Route path="/createaccount" element={<CreateAccountForm />} />

        </Routes>
      </Navbar>
    </Router>
  );
};

export default App;