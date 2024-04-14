import { useContext } from "react";
import { NavLink, Link } from "react-router-dom"
import { AuthContext } from "../Provider/AuthProvider";

const Navber = () => {
    const { user, logOutUser, loading } = useContext(AuthContext)

    const handleLogOut = () => {
        logOutUser()
            .then()
            .catch(error => console.error(error))
    }
    
//     const handleeta = () =>{
// console.log('kichu ekta');
//     }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        {user && <>
            <li><NavLink to="/updateProfile">Update Profile</NavLink></li>
            <li><NavLink to="/Contact">Contact Us</NavLink></li>
        </>}
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost lg:text-2xl md:text-xl font-black"><span className='bg-gradient-to-r from-[#1DD100] via-blue-500 to-black text-transparent bg-clip-text bg-300% animate-gradient'>Residential House</span></Link>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1 font-bold">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end z-10">
                {loading ? <span className="loading loading-bars loading-xs"></span> : user? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-20 rounded-full border-4">
                                    <img title={user?.displayName} src={user?.photoURL } />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user?.displayName||'user name not found'}</button>
                                </li>
                                <li>
                                    <Link to="/login" className="btn"
                                        onClick={handleLogOut}>Logout
                                    </Link>
                                </li>
                            </ul>
                        </div> :
                    <Link to="/login" className="btn bg-[#1DD100] text-white font-semibold">Log In</Link>
                }

            </div>
        </div>
    );
};

export default Navber;