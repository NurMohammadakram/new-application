import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Details from '../Details_component/Details';
import "./Product.css";

const Product = (props) => {
    const product = props.items;
    const {name, img, price, category, stock, features, seller, key}= product;
    const [visibility, setVisibily] = useState(false);
    const [details, setDetails] = useState([]);
   
    const handler = () => {
        const x = features.map(ft => ft.description + ': ' + ft.value);
        setDetails(x);
        setVisibily(!visibility);
    };
    
    return (
        <div className='product'>
            <div className="product-img">
                <img src={img} alt="laptop-sources-not-found" />
                <p style={{textAlign: 'center'}}><small>catagory: {category}</small></p>
            </div>
            <div className="product-info">
                <h4><Link to={'/product/' + key}>{name}</Link></h4>
                <div className="info">
                    <div className='basic-info'>
                        <p>By: {seller}</p>
                        <h4>Price: ${price}</h4>
                        <p>only {stock} in Stoke -hurry up </p>
                        <div>
                            <button className='btn-cart' onClick={() => props.addCart(product)}><FontAwesomeIcon className='icon' icon={faShoppingCart}/> Add to cart</button>
                        </div>
                    </div>
                    <div className="details-info">
                        <Details handler={handler} details= {details} trueOrDare= {visibility}></Details>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;