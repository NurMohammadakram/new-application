import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import Navbar from './Component/Nav_secton/Navbar';
import Shop from './Component/Shop_section/Shop';
import Cart from './Component/Cart_page/Cart_review';
import Error from './Component/Error_page/Error';
import Account from './Component/Account/Account';


function App() {
  
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='shop' element={<Shop />} />
        <Route path='cart' element={<Cart />} />
        <Route path='account' element={<Account />} />
        <Route path='cart' element={<Cart />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;