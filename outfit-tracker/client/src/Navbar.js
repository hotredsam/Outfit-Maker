import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-buttons">
                <button className="nav-button">Upload Images</button>
                <button className="nav-button">View Items</button>
                <button className="nav-button">Create Outfits</button>
                <button className="nav-button">View Outfits</button>
            </div>
            <button className="account-button">Account</button>
        </div>
    );
};

export default Navbar;
