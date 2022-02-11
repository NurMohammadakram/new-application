import React, { useState, useEffect } from 'react';
import data2 from '../../asset/fakeData/data2.json';
import './Shop.css';
//import data from '../../asset/fakeData/data';
import Product from '../Product_component/Product';
import NextProduct20 from '../Product_component/NextProduct20';
import Cart from '../Cart_component/Cart';


const Shop = () => {
    const [items, setItems] = useState([]);
    const [visibility, setVisibility] = useState(false);
    const [cart, setCart] = useState([]);

    const productInfo10 = items.slice(0, 10);
    const nextProduct20 = items.slice(10, 20)
    // const nextProduct30 = items.slice(20, 30);


    const addCart = (prop) => {
        const newCart = [...cart, prop]
        setCart(newCart)
    }

    const showMoreHandler = () => {
        setVisibility(!visibility);
    };

    useEffect( () => {
        setItems(data2)
    }, []);

    return (
        <div className='shop-container'>      
            <div className="product-container">
                <div className='product-component-first10'>
                    {
                        productInfo10.map(item => <Product addCart={addCart} items= {item} key={item.id}></Product>)
                    }
                </div>
                <div className='product-component-next20'>
                    <NextProduct20 nextProduct20={nextProduct20} addCart={addCart} showMoreHandler={showMoreHandler} visibility={visibility}></NextProduct20>
                </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;