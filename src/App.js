import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Navbar from './Component/Nav_secton/Navbar';
import Shop from './Component/Shop_section/Shop';
import Cart from './Component/Cart_component/Cart';
import Error from './Component/Error_page/Error';
import Account from './Component/Account/Account';


function App() {
  
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Shop></Shop>
      </div>
    </Router>
  );
}

export default App;