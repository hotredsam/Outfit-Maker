import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/Dashboard'; // Adjust the path if necessary
import Navbar from './components/Navbar';
import CreateAccountForm from './pages/CreateAccount';
import AddClothingItem from './components/UploadImage';

const App = () => {
  return (
    <Router>
      <Navbar>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/upload" element={<AddClothingItem />} />
          <Route path="/viewitems" element={<DashboardPage />} />
          <Route path="/createoutfits" element={<DashboardPage />} />
          <Route path="/viewoutfits" element={<DashboardPage />} />
          <Route path="/createaccount" element={<CreateAccountForm />} />
        </Routes>
      </Navbar>
    </Router>
  );
};

export default App;