import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import Navbar from './Component/Nav_secton/Navbar';
import Shop from './Component/Shop_section/Shop';
import Cart from './Component/Cart_review_page/Cart_review_page';
import Error from './Component/Error_page/Error';
import Account from './Component/Account/Account';
import ProductView from './Component/Product_view_more/Product_view';


function App() {
  
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='shop' element={<Shop />} />
        <Route path='account' element={<Account />} />
        <Route path='cart' element={<Cart />} />
        <Route path='product/:productKeys' element={<ProductView />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;