import React from 'react';
import './Error.css';

const Error = () => {
    return (
        <div className='err-container'>
            <h1 className='err'>404</h1>
            <h1>page not found. <br />
            Looks like you are lost! <br />
            Now you fucked up!
            </h1>
        </div>
    );
};

export default Error;