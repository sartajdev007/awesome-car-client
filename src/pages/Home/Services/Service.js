import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ srv }) => {
    const { img, price, title } = srv

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-500 font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${srv._id}`}>
                        <button className="btn bg-orange-500 border-0">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;