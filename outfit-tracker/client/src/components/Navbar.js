import Sidebar from './Sidebar'
import './Navbar.css'
import Footer from './Footer'

const Navbar = ({ children }) => {
  return (
    <div className='app-container'>
      <div className="top-navbar">
        <div className="left-section">
          <img src="./logo.svg" alt="Logo" className="logo" />
          <div className="nav-buttons">
            <button className="nav-button">Upload Images</button>
            <button className="nav-button">View Items</button>
            <button className="nav-button">Create Outfits</button>
            <button className="nav-button">View Outfits</button>
          </div>
        </div>
        <div className="right-section">
          <button className="account-button">Account</button>
        </div>
      </div>
      <div className="app-content-container">
        <div className="app-sidebar-container">
          <Sidebar />
        </div>
        <div className="app-content">
          {children}
        </div>
      </div>
      <div className="app-footer">
        <Footer />
      </div>
    </div>
  )
}

export default Navbar