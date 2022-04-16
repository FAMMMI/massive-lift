import React from 'react';
import { Card } from 'react-bootstrap';



import banner3 from '../../../images/banner03.jpg';


const Banner = () => {

    return (
        <Card className="bg-dark text-white">
            <Card.Img className='w-75 mx-auto ' src={banner3} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>Massive Lift-Up</Card.Title>
                <Card.Text>
                    A well-known trainer where you will get perfect training and motivations to build up your body with experience .
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
};

export default Banner;