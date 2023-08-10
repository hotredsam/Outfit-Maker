import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Footer from './Footer';
import './DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
};

export default DashboardPage;
