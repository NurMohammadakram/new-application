import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Navbar from './Component/Nav_secton/Navbar';
import Shop from './Component/Shop_section/Shop';
import Cart from './Component/Cart_page/Cart_details';
import Error from './Component/Error_page/Error';
import Account from './Component/Account/Account';


function App() {
  
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/account' element={<Account />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<Error />} />
          </Routes>  
        </div>
      </Router>
    </div>
  );
}

export default App;