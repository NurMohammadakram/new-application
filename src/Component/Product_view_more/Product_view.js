import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../asset/fakeData/data';
import './Product_view.css';

const ProductView = () => {
    const key = useParams();
    console.log(key)
    const product = data.find(pd => pd.key === key["productKeys"]);
    const {name, img, price, category, stock, features, seller}= product;

    return (
        <div className='viewContainer'>
            <div className='imageContainer'>
                <img className='img' src={img}></img>
            </div>
            <div className='contentContainer'>
                <h2>{name}</h2>
                <p>Brand: {seller}</p>
                <p>stock: {stock}</p>
                <p>price: ${price}</p>
            </div>
        </div>
    );
};

export default ProductView;