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
        <div className='service'>
            <img className='image img-fluid service-img' src={img} alt="" />
            <h2 className='p-2'>{name}</h2>
            <p>Price: ${price}</p>
            <p><small>{description}</small></p>

            <Card.Footer className='border-0 text-center'>
                <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary service-btn'>Book Now</button>
            </Card.Footer>
        </div>
    );
};

export default Service;