import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'


const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service mx-auto'>
            <img className='image img-fluid service-img p-0' src={img} alt="" />
            <h2 className='p-2'>{name}</h2>
            <p>Price: ${price}</p>
            <p><small>{description}</small></p>


            <div className='text-center'> <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary service-btn'>Book Now</button></div>

        </div>
    );
};

export default Service;