import React, { useContext } from 'react';
import './Navber.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = ()=>{
        logOut()
        .then(()=>{})
        .catch(()=>{})
    }

    const menuItems = <>
        <li><Link className='border-2 border-primary hover:border-2 rounded-lg hover:border-secondary hover:text-secondary' to='/'>Home</Link></li>

        <li><Link className='border-2 border-primary hover:border-2 rounded-lg hover:border-secondary hover:text-secondary' to='/allBooks'>Browse Collection</Link></li>

        <li><Link to='/contactUs' className='border-2 border-primary hover:border-2 rounded-lg hover:border-secondary hover:text-secondary'>Contact Us</Link></li>

        {/* <li><Link className='border-2 border-primary hover:border-2 rounded-lg hover:border-secondary hover:text-secondary' to='/about'>About</Link></li> */}

        {
            user?.uid ? 
            <>
                    <li><Link className='border-2 border-primary hover:border-2 rounded-lg hover:border-secondary hover:text-secondary' to='/dashboard/myOrders'>Dashbord</Link></li>

                    <li><button className='border-2 border-primary hover:border-2 rounded-lg hover:border-secondary hover:text-secondary' onClick={handleLogOut}>Log Out</button></li>
            </>
            :
                <li><Link className='border-2 border-primary hover:border-2 rounded-lg hover:border-secondary hover:text-secondary' to='/login'>Login</Link></li>
        }
        
    </>

    return (
        <div className="navbar bg-primary text-white flex justify-between sticky top-0 z-30 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52 text-primary font-bold">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"> <img src="https://i.ibb.co/pfV9SqM/download-removebg-preview.png" width={'50px'} alt="" className='mr-2'/> BookSourcing</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="dashbord-drawer" tabIndex={1} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            {/* <div className="navbar-end">
                <a className="btn">Get started</a>
            </div> */}
        </div>
    );
};

export default Navbar;