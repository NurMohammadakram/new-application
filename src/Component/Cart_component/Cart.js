import React from 'react';
import './Cart.css';


const Cart = (props) => {
    const cartList = [...props.cart];
    
    const x = cartList.reduce((obj, item) => {
        obj = item;
        return obj;
    }, {});
    const {name, img, price, category, stock, features, seller} = x;

    const total = cartList.reduce((total, cart) => total + cart.price, 0);
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
                <button className='btn-cart'>Preview your Cart</button>
            </div>
        </div>
    );
};

export default Cart;