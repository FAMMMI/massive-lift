import React from 'react';
import { Card } from 'react-bootstrap';
import './Banner.css'



import banner3 from '../../../images/banner03.jpg';
import { Link } from 'react-router-dom';


const Banner = () => {

    return (
        <Card className="bg-dark text-white">
            <Card.Img className='w-100 mx-auto card-img' src={banner3} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>Massive Lift-Up</Card.Title>
                <Card.Text>
                    A well-known trainer where you will get perfect training and motivations to build up your body with experience .
                </Card.Text>
                <a href="home#services" className='services-btn'>
                    Services
                </a>
            </Card.ImgOverlay>
        </Card>
    );
};

export default Banner;