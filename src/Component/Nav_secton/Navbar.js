import React from 'react';
import './Navbar.css';
import logo from '../../asset/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Navbar(props) {


    const handler = (event) => {
        event.preventDefault()
        return event.target.value
    }
    return (
        <nav className='navbar shadow'>
            <div><img className='brand' src={logo} alt=""/> </div>
            <div>
                <input onChange={handler} id='searchbar' placeholder='Search for products by their catagory' type="text" />
                <button id='btn' onClick={handler}><span><FontAwesomeIcon icon={faSearch} /></span> search</button>
            </div>
            
            <ul className='navbar-nav'>
                <li className='list'><a href="/home">Home</a></li>
                <li className='list'><a href="/shop">Shop</a></li>
                <li className='list'><a href="/account">My Account</a></li>
                <li className='list'><a href="/cart"><FontAwesomeIcon icon={faShoppingCart} />Cart</a></li>
            </ul>
        </nav>    
    );
}

export default Navbar;