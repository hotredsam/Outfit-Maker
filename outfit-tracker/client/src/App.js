import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/Dashboard'; // Adjust the path if necessary
import Navbar from './components/Navbar';
import CreateAccountForm from './pages/CreateAccount';
import AddClothingItem from './components/UploadImage';
import UploadImageForm from './components/UploadImageForm';
import ItemDetailPage from './pages/ItemDetailPage';
import UpdateClothingItem from './pages/UpdateItemPage';
import OutfitDetailPage from './pages/OutfitDetailPage';
import { ClothingContextProvider } from './context/ClothingItemsContext';
import { OutfitsContextProvider } from './context/OutfitsContext';

const App = () => {
  return (
    <ClothingContextProvider>
    <OutfitsContextProvider>
        <Router>
        <Navbar>
            <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/upload" element={<AddClothingItem />} />
            <Route path="/uploadPhoto" element={<UploadImageForm />} />
            <Route path="/viewitems" element={<DashboardPage />} />
            <Route path="/viewitems/:id" element={<ItemDetailPage />} />
            <Route path="/viewitems/:id/update" element={<UpdateClothingItem />} />
            <Route path="/createoutfits" element={<DashboardPage />} />
            <Route path="/viewoutfits" element={<DashboardPage />} />
            <Route path="/viewoutfits/:id" element={<OutfitDetailPage />} />
            <Route path="/createaccount" element={<CreateAccountForm />} />
            </Routes>
        </Navbar>
        </Router>
    </OutfitsContextProvider>
    </ClothingContextProvider>
  );
};

export default App;