import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import './Checkout.css'

const Checkout = () => {
    const handleProceed = (event) => {
        event.preventDefault();
        toast("Confirmation on proceed");
    }
    return (
        <div className='register-form'>
            <h2>Details of your choosen packages</h2>
            <form>
                <input className='w-75 mx-auto' type="text" name="Name" id="" placeholder='Your Name' />
                <input className='w-75 mx-auto' type="text" name="Address" id="" placeholder='Address' />
                <input className='w-75 mx-auto' type="text" name="PhoneNo" id="" placeholder='Phone number' />

                <input className='w-75 mx-auto' type="email" name="email" id="" placeholder='Email Address' required />



                <input
                    onClick={handleProceed}
                    className='w-50 mx-auto btn proceed-btn  mt-2 register-btn'
                    type="submit"
                    value="Proceed" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default Checkout;