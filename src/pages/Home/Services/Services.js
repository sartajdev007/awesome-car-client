import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://awesome-car-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className="mb-10">
            <div className='text-center mb-10'>
                <p className='text-2xl font-bold text-orange-500'>Services</p>
                <h2 className='text-5xl font-semibold pb-5'>Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words <br /> which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(srv => <Service key={srv.service_id} srv={srv}></Service>)
                }
            </div>
            <div className='text-center mt-4'>
                <button className="btn btn-outline btn-error">More Services</button>
            </div>
        </div>
    );
};

export default Services;