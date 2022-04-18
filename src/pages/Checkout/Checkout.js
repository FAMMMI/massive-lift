import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Checkout = () => {
    const handleProceed = (event) => {
        event.preventDefault();
        toast("Confirmation on proceed");
    }
    return (
        <div className='register-form'>
            <h2>Details of your choosen packages</h2>
            <form>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="text" name="Address" id="" placeholder='Address' />
                <input type="text" name="PhoneNo" id="" placeholder='Phone number' />

                <input type="email" name="email" id="" placeholder='Email Address' required />



                <input
                    onClick={handleProceed}
                    className='w-50 mx-auto btn  mt-2 register-btn'
                    type="submit"
                    value="Proceed" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default Checkout;