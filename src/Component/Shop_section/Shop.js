import React, { useState, useEffect } from 'react';
import './Shop.css';
import data2 from '../../asset/fakeData/data2.json';
import data from '../../asset/fakeData/data';
import Product from '../Product_component/Product';
import NextProduct20 from '../Product_component/NextProduct20';
import Cart from '../Cart_component/Cart_info';
import { addToDatabaseCart, getDatabaseCart } from '../../asset/utilities/fakedb';
import { Link } from 'react-router-dom';


const Shop = () => {
    const [items, setItems] = useState([]);
    const [visibility, setVisibility] = useState(false);
    const [cart, setCart] = useState([]);

    const productInfo10 = items.slice(0, 10);
    const nextProduct20 = items.slice(10, 20);
    // const nextProduct30 = items.slice(20, 30);

    const addCart = (item) => {
        const key = item.key;
        const sameProduct = cart.find(pd => pd.key === key);
        let count = 1;
        let newCart;
        if(sameProduct) {
            count = item.quantity + 1;
            sameProduct.quantity = count;
            const cartItemsBefore = cart.filter(pd => pd.key !== key);
            newCart = [...cartItemsBefore, sameProduct];
        }
        else {
            item.quantity = 1;
            newCart = [...cart, item];
        }
        setCart(newCart);
        addToDatabaseCart(key, count);
    }

    const showMoreHandler = () => {
        setVisibility(!visibility);
    };

    useEffect( () => {
        setItems(data2);

        const dbData = getDatabaseCart();
        const productKeys = Object.keys(dbData);
        const products = productKeys.map(dbkey => {
            const product = data.find(pd => pd.key === dbkey);
            product.quantity = dbData[dbkey];
            return product;
        })
        setCart(products);
    }, []);

    return (
        <div className='shop-container'>      
            <div className="product-container">
                <div className='product-component-first10'>
                    {
                        productInfo10.map(item => <Product addCart={addCart} item= {item} key={item.key}></Product>)
                    }
                </div>
                <div className='product-component-next20'>
                    <NextProduct20 nextProduct20={nextProduct20} addCart={addCart} showMoreHandler={showMoreHandler} visibility={visibility}></NextProduct20>
                </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/cart"><button className='btn-cart'>Preview your Cart</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;