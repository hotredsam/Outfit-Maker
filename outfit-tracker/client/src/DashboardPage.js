import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Footer from './components/Footer';
import './DashboardPage.css';

const DashboardPage = () => {
    const images = [
        'https://picsum.photos/200',
        'https://picsum.photos/200',
        'https://picsum.photos/200',
        'https://picsum.photos/200',
        'https://picsum.photos/200',
        'https://picsum.photos/200',
        'https://picsum.photos/200',
        'https://picsum.photos/200'
    ].map(s => ({
        top: s,
        middle: s,
        bottom: s
    }));

    return (
        <div className="dashboard">
            <Navbar />
            <div className="dashboard-content">
                <Sidebar />
                <MainContent images={images} />
            </div>
            <Footer />
        </div>
    );
};

export default DashboardPage;
