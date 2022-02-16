import React from 'react';
import './Details.css';

const Details = props => {
    const {handler, trueOrDare, details} = props;
   
        if(trueOrDare) {
            return (
                <div className='details-btn'>
                    <div className='details-div'><p><small>{details}</small></p></div>
                    <button className='btn-2' onClick={handler}>Hide Details: </button>
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