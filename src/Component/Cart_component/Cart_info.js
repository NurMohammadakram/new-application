import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';


const Cart = (props) => {
    const cartList = props.cart;
   
    
    const total = cartList.reduce((total, cart) => total + cart.price * cart.quantity, 0);
    const shipping = cartList.reduce((sum, cart) => sum + cart.shipping, 0);
    

    const tax = total / 10;
    const grandTotal = Math.round(total + shipping + tax)
    return (
        <div className='cart-info'>
            
            <div className="cart-info-header">
                <h4>Ordered Items to Cart</h4>
            </div>
            <div className="cart-info-details">
                <p>Items Ordered: {cartList.length}</p>
                <p>items Price: ${Math.round(total)}</p>
                <p>Shipping cost: ${Math.floor(shipping)}</p>
                <p>Tax + Vat: ${Math.floor(tax)}</p>
                <p>Net Price: ${grandTotal}</p>
            </div>
            <div className="cart-button">
                <Link to="cart"><button className='btn-cart'>Preview your Cart</button></Link>
            </div>
        </div>
    );
};

export default Cart;