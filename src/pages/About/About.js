import React from 'react';
import pic1 from '../../images/pic01.png';

const About = () => {
    return (

        <div>
            <div className='text-center p-3'>
                <img className='w-50' src={pic1} alt="" />
            </div>

            <div className='text-center'>
                <h3>Naimur Rahaman Imthiaz</h3>
                <p className='p-4'>I have an ambition to push myself higher and higher so that I can satisfied with myself . Everyone has a dream to be successful but for me it is like satisfy myself and when you will satisfy with yourself it is the success. So , I will always try to do the best of myself and put my head up to be that man which is my ambition to be . Wether I become successful as programmer or not , I must be a successful person as success has no parameter. </p>
            </div>

        </div>

    );
};

export default About;