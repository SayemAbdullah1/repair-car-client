import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg';
import { authContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const { createUser } = useContext(authContext)
    const  handleLogin = event =>{
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);

        })
        .catch(err => console.error(err))
        }
    


    return (
        <div className="hero my-20 w-full">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:pr-6 lg:text-left">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                            <h2 className='text-4xl font-bold'>Login</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required/>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                            
                        </div>
                    <span>New in this site? <Link to='/signup' className='text-orange-500 font-bold'>SignUp</Link></span>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;