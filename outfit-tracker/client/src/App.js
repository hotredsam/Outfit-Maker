import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/Dashboard'; // Adjust the path if necessary
import Navbar from './components/Navbar';
import CreateAccountForm from './pages/CreateAccount';
import AddClothingItem from './components/UploadImage';
import ItemDetailPage from './pages/ItemDetailPage';
import UpdateClothingItem from './pages/UpdateItemPage';
import { ClothingContextProvider } from './context/ClothingItemsContext';

const App = () => {
  return (
    <ClothingContextProvider>
        <Router>
        <Navbar>
            <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/upload" element={<AddClothingItem />} />
            <Route path="/viewitems" element={<DashboardPage />} />
            <Route path="/viewitems/:id" element={<ItemDetailPage />} />
            <Route path="/viewitems/:id/update" element={<UpdateClothingItem />} />
            <Route path="/createoutfits" element={<DashboardPage />} />
            <Route path="/viewoutfits" element={<DashboardPage />} />
            <Route path="/createaccount" element={<CreateAccountForm />} />
            </Routes>
        </Navbar>
        </Router>
    </ClothingContextProvider>
  );
};

export default App;