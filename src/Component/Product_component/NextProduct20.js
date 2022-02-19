import React from 'react';
import Product from './Product';
import './NextProduct20.css';

const NextProduct20 = (props) => {
    
    const { showMoreHandler, addCart, visibility, nextProduct20} = props;
    // const nextProduct20 = props.nextProduct20;

    if(visibility) {
        return (
            <div>
                {
                    nextProduct20.map(item => <Product addCart={addCart} items= {item} key={item.key}></Product>)
                }
            </div>
        )
    }
    else {
        return (
            <div className='btn-section'>
                <button className='btn' onClick={showMoreHandler}>See More Product</button>
            </div>
        )
    }
};

export default NextProduct20;