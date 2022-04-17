import React from 'react';
import './Photo.css';

const Photo = ({ photo }) => {
    const { img } = photo;
    return (
        <div>
            <img className='image img-fluid' src={img} alt="" />
        </div>
    );
};

export default Photo;