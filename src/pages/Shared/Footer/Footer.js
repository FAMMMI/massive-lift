import React from 'react';
import './Footer.css'

import fblogo from '../../../images/icons/facebook.png'
import gitlogo from '../../../images/icons/github.png'
import googlelogo from '../../../images/icons/google.png'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5 footer-container pb-0'>

            <div className='footer-detail'>
                <div className='text-white'>
                    <p className='pb-1 mb-0'>Contact with us :</p>
                    <p className='pb-1 mb-0'>Phone: 01515681709</p>
                    <p className='pb-1 mb-0'>Email: <a className='email text-white' href="https://www.naimfami@gmail.com">naimfami@gmail.com</a> </p>
                </div>
                <div className='d-flex align-items-center justify-content-center gap-3 p-4'>
                    <p className='text-white m-1'><b>Our Social handle :</b></p>
                    <a href="https://www.facebook.com"><img width={30} src={fblogo} alt="" /></a>
                    <a href="https://www.github.com"><img src={gitlogo} alt="" /></a>
                    <a href="https://www.google.com"><img src={googlelogo} alt="" /></a>
                </div>
            </div>
            <p className='mb-0 pb-3 '><small className='text-white'>Massive Lift-Up -- copyright © {year} </small></p>
        </footer>
    );
};

export default Footer;