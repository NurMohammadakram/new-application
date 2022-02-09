import React from 'react';
import './Details.css';

const Details = props => {
    const {handler, trueOrDare, details} = props;
   
        if(trueOrDare) {
            return (
                <div className='details-btn'>
                    <button className='btn-2' onClick={handler}>Hide Details: </button>
                    <div className='details-div'>{details}</div>
                </div>
            )
        }
        else {
            return (
                <div className='details-btn'>
                    <button className="btn-1" onClick={handler}>See Details: </button>
                </div>
            )
        }
};


export default Details;