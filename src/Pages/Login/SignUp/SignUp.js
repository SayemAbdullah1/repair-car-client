import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Login from '../../../assets/images/login/login.svg'
import { authContext } from '../../../context/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(authContext)
    const handleSignUp = event =>{
        event.preventDefault()
    
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(err => console.error(err))
    }


    return (
        <div className="hero my-20 w-full">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:pr-6 lg:text-left">
                    <img src={Login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h2 className='text-4xl font-bold'>SignUp</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />

                        </div>
                        <span>Already have an account? <Link to='/login' className='text-orange-500 font-bold'>Login</Link></span>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;