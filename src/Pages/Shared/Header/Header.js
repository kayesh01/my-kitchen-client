import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.sng';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const handleLogOut = () => {
        logout()
            .then(() => { })
            .catch((err) => console.error(err));
    }
    return (
        <div className="navbar h-20 mb-12 p-9 bg-stone-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='font-semibold'><Link to='/'>Home</Link></li>
                        <li className='font-semibold'><Link to='/services'>Services</Link></li>
                        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
                        {
                            user?.uid ?
                                <>
                                    <li className='font-semibold'><Link to='/reviews'>My Reviews</Link></li>
                                    <li className='font-semibold'><Link to='/addservice'>Add service</Link></li>
                                    <li><button onClick={handleLogOut}>Log Out</button></li>
                                </>
                                :
                                <>
                                    <li className='font-semibold'><Link to='/login'>Login</Link></li>
                                </>
                        }
                    </ul>
                </div>
                <Link to='/'><img className='h-16 w-16' src={logo} alt="" /></Link>
                <Link to='/'><p className='ml-5 font-semibold'>My Kitchen</p></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li className='font-semibold'><Link to='/'>Home</Link></li>
                    <li className='font-semibold'><Link to='/services'>Services</Link></li>
                    <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
                    {
                        user?.uid ?
                            <>
                                <li className='font-semibold'><Link to='/reviews'>My Reviews</Link></li>
                                <li className='font-semibold'><Link to='/addservice'>Add service</Link></li>
                                <li><button onClick={handleLogOut}>Log Out</button></li>
                            </>
                            :
                            <>
                                <li className='font-semibold'><Link to='/login'>Login</Link></li>
                            </>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline btn-warning">Reviews</button>
            </div>
        </div>
    );
};

export default Header;