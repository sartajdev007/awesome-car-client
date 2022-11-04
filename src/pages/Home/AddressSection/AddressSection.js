import React from 'react';
import { FaCalendarCheck, FaLocationArrow, FaPhoneAlt } from 'react-icons/fa';

const AddressSection = () => {
    return (
        <div className='bg-black text-white py-10 px-8 mb-10 rounded-xl'>
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className='flex flex-col md:flex-row'>
                    <div className='p-10'>
                        <FaCalendarCheck className='text-7xl'></FaCalendarCheck>
                    </div>
                    <div className='py-10'>
                        <p className='font-semibold'>We are open monday-friday</p>
                        <p className='text-3xl font-semibold'>7:00 am-9.00 pm</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row'>
                    <div className='p-10'>
                        <FaPhoneAlt className='text-7xl'></FaPhoneAlt>
                    </div>
                    <div className='py-10'>
                        <p className='font-semibold'>Have a question?</p>
                        <p className='text-3xl font-semibold'>+123456789</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row'>
                    <div className='p-10'>
                        <FaLocationArrow className='text-7xl'></FaLocationArrow>
                    </div>
                    <div className='py-10'>
                        <p className='font-semibold'>Need a repair?</p>
                        <p className='text-3xl font-semibold'>Dhaka,Bangladesh</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddressSection;