import React, { useEffect, useState } from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../asset/utilities/fakedb';
import data from '../../asset/fakeData/data';
import Review from '../Review_cart_product/Review_Cart_product';
import Cart from '../Cart_component/Cart_info';
import successPic from '../../asset/images/giphy.gif';
import { Link } from 'react-router-dom';

const CartPageDetails = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handleOrderPlaced = () => {
        setCart([]);
        setOrderPlaced(true)
        processOrder();
    }

    const handler = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        const removedata = removeFromDatabaseCart(productKey);
        return removedata;
    }

    useEffect(() => {
        const selectedCart = getDatabaseCart();
        const cartKeys = Object.keys(selectedCart);
        const products = cartKeys.map(key => {
            const product = data.find(pd => pd.key === key);
            product.quantity = selectedCart[key];
            return product;
        });
        setCart(products);
    }, []);

    
    let MSG;
    let placeOrderOrreturnToShop;

    if (cart.length > 0) {
        MSG = (
            <div>
                <h2 style={{padding: '30px', textAlign: 'center', color: 'rgb(243, 143, 28)'}}>Press Place Order to process your order or return to shop page to shop more</h2>
            </div>
        )
        placeOrderOrreturnToShop = (
            <button className='btn-cart' onClick={handleOrderPlaced}>Place Order</button>
        )
    }
    else {
        if (orderPlaced) {
            MSG = (
                <div>
                    <img src={successPic} alt='success'></img>
                    <h4 style={{color: "green"}}>Succesfully order placed.</h4>
                    <p>We will reach your door as soon as posible!</p>
                </div>
            )
            placeOrderOrreturnToShop = (
                <Link to='/shop'>
                    <button className='btn-cart'>Return to shop page</button>
                </Link>
            )
        }
        else {
            MSG = (
                <div style={{padding: '30px', textAlign: 'center', color: 'rgb(243, 143, 28)'}}>
                    <h2>Your Cart is empty!!</h2>
                    <h3>
                        Return to <Link to='/shop'>shop</Link> page
                    </h3>
                </div>
            )
            placeOrderOrreturnToShop = (
                <Link to='/shop'>
                    <button className='btn-cart'>Return to shop page</button>
                </Link>
            )
        }
    }



    return (
        <div className='shop-container' style={{margin: '20px 40px'}}>
            <div>
                {
                    cart.map(pd => <Review product={pd} key={pd.key} handler={handler}></Review>)
                }
                {
                    MSG
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    {
                        placeOrderOrreturnToShop
                    }
                </Cart>
            </div>
        </div>

        
    );
};

export default CartPageDetails;