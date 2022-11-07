import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaGoogle } from "react-icons/fa"

const Login = () => {
    const { signIn, googleLogin } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user

                const currrentUser = {
                    email: user.email
                }

                console.log(currrentUser)
                // get jwt token
                fetch('https://awesome-car-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currrentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)

                        // local storage is the easiest not the best way for token store
                        localStorage.setItem('awesome-token', data.token)
                        navigate(from, { replace: true })
                    })

            })
            .catch(err => console.error(err))
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user
                const currrentUser = {
                    email: user.email
                }
                // get jwt token
                fetch('https://awesome-car-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currrentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)

                        // local storage is the easiest not the best way for token store
                        localStorage.setItem('awesome-token', data.token)
                    })
            })
    }

    return (
        <div className="hero w-full my-10">
            <div className="hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20 px-1">
                    <h1 className="text-5xl text-center font-bold">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-orange-500 border-0" type="submit" value="Login" />
                        </div>
                        <div className="form-control mt-6">
                            <input onClick={handleGoogleLogin} className="btn bg-orange-500 border-0" type="button" value="Login With Google" />
                        </div>
                    </form>

                    <p className='text-center'>New to Awesome Cars <Link className='text-orange-500 font-bold' to='/signup'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;