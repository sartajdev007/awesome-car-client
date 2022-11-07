import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const service = useLoaderData()
    const { user } = useContext(AuthContext)

    const handlePlaceOrder = e => {
        e.preventDefault()
        const form = e.target
        const name = `${form.first.value} ${form.second.value}`
        const phone = form.phone.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value


        const order = {
            service: service._id,
            serviceName: service.title,
            price: service.price,
            customer: name,
            email: email,
            phone: phone,
            message: message

        }
        // if (phone.length < 11) {
        //     alert('Number should 10 characters or more')
        // }
        fetch('https://awesome-car-server.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset()
                    alert('Successfully Placed Order')
                }
            })
            .catch(err => console.error(err))

    }


    return (
        <div className='mb-10'>
            <form onSubmit={handlePlaceOrder}>
                <h2 className='text-4xl py-2'>{service.title}</h2>
                <h4 className='text-3xl py-7'>Price:${service.price}</h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <input name="first" type="text" placeholder="First Name" className="input input-bordered w-full" />
                    <input name="second" type="text" placeholder="Last Name" className="input input-bordered w-full" />
                    <input name="phone" type="text" placeholder="Your Phone" className="input input-bordered w-full" required />
                    <input name="email" type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                </div>
                <textarea name='message' className="textarea textarea-bordered w-full mt-4" placeholder="Address Details"></textarea>

                <input type="submit" className='btn bg-orange-500 border-0' value="Place Your Order" />
            </form>
        </div>
    );
};

export default CheckOut;