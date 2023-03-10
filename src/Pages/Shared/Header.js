import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { authContext } from '../../context/AuthProvider/AuthProvider';

const Header = () => {
    const {user} = useContext(authContext)
    const navItem = 
    <>
            <li><Link className='mx-2' to='/'>Home</Link></li>
          {  
          user?.email ?
         <>
            <li><Link className='mx-2' to='/orders'>Order</Link></li>
         </>
          :
            <li><Link className='mx-2' to='/login'>Login</Link></li>
            }
    
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl h-[100px]"><img src={logo} alt="" className='h-[50px]'/></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className=""><button className="btn btn-outline btn-warning">Appointment</button></Link>
            </div>
        </div>
    );
};

export default Header;