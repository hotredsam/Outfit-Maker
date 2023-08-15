<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import CreateAccountForm from "./pages/CreateAccount";
import ViewOutfits from "./components/ViewOutfits";
=======
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/Dashboard'; // Adjust the path if necessary
import Navbar from './components/Navbar';
import CreateAccountForm from './pages/CreateAccount';
import ViewItems from './components/viewItems';
>>>>>>> 51b11fe (adding viewItems page, still working on it)

const App = () => {
  return (
    <Router>
      <Navbar>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/upload" element={<DashboardPage />} />
          <Route path="/viewitems" element={<ViewItems />} />
          <Route path="/createoutfits" element={<DashboardPage />} />
          <Route path="/viewoutfits" element={<ViewOutfits />} />
          <Route path="/createaccount" element={<CreateAccountForm />} />
        </Routes>
      </Navbar>
    </Router>
  );
};
export default App;

    //   <div>
    //   <Visitor/>
    // </div>
// <Provider store={store}>
//   {viewOutfits}
// </Provider>

// import AddClothingItem from './components/UploadImage'
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// // import scrollReducer from './ScrollableSection';
// import Visitor from "./components/visitor";
//const store = createStore(scrollReducer);