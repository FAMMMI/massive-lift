import React from 'react';
import './Photos.css';

const Photos = ({ photo }) => {
    const { img } = photo;
    return (
        <div className='photo-container'>
            <img className='image img-fluid service-img mx-auto' src={img} alt="" />
        </div>
    );
};

export default Photos;