import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../asset/utilities/fakedb';
import data from '../../asset/fakeData/data';
import Review from '../Review_cart_product/Review_Cart_product';
import Cart from '../Cart_component/Cart_info';

const CartPageDetails = () => {
    const [cart, setCart] = useState([]);
    console.log(data);

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

    return (
        <div className='shop-container' style={{margin: '20px 40px'}}>
            <div>
                {
                    cart.map(pd => <Review product={pd} key={pd.key} handler={handler}></Review>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>

        
    );
};

export default CartPageDetails;