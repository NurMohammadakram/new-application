import React from 'react';

const ReviewCart = (props) => {
    const {name, quantity, key, price} = props.product;

    
    return (
        <div>
            <div style={{border: '1px solid #f7f7f7', padding: '10px 20px'}}>
                <h4>{name}</h4>
                <p>quantity: {quantity}</p>
                <p>each product price: {price}</p>
                <p>total price: {Math.round(price * quantity)}</p>
                <button onClick={() => props.handler(key)} className='btn-cart'>Remove</button>
            </div>
        </div>
    );
};

export default ReviewCart;