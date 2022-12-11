import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import resume from '../../Assets/Resume/Ariful_Islam_Resume.pdf'

const Navbar = () => {

    const menuList =
        <>

            < li className='text-black'> <Link to='/'>Home</Link></li>
            <li className='text-black'> <a href={resume} download={resume}>
                Resume <FaDownload className=''></FaDownload></a></li>
            <li className='text-black'><Link to='/contact'>Contact Me</Link></li>

        </>

    return (
        <div className="navbar bg-base-500 border-b-2 border-gray-800">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuList}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl text-black">Ariful Islam</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuList}
                </ul>
            </div>
            {/* <div className="navbar-end">
                <a className="btn">Get started</a>
            </div> */}
        </div>
    );
};

export default Navbar;