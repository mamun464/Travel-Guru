import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";



const Nav_2 = () => {
    const { user, logOutUser } = useContext(AuthContext)
    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                console.log("Logout successful:");
            })
            .catch(err => {
                console.error(err);
            })


    }
    const navLink = <>
        <li><NavLink to={"/News"}>News</NavLink></li>
        <li><NavLink to={"/Destination"}>Destination</NavLink></li>
        <li><NavLink to={"/Blog"}>Blog</NavLink></li>
        <li><NavLink to={"/Contact"}>Contact</NavLink></li>
    </>
    return (
        <>
            <div className="navbar  max-w-7xl mx-auto text-black relative">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-montserrat font-medium text-black">
                            {navLink}

                        </ul>
                    </div>
                    <Link to={"/"} className="btn btn-ghost text-xl w-36 h-20">
                        <img className="w-28 h-14" src="/logo.png" alt="Logo" />
                    </Link>
                </div>


                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-montserrat font-medium">
                        {navLink}

                    </ul>
                </div>

                <div className="navbar-end ">
                    {
                        user ?
                            <>
                                <div className="flex gap-3 items-center">
                                    <h1 className="text-black font-bold">{user?.displayName}</h1>
                                    <Link onClick={handleLogOut} className="btn bg-[#F9A51A] w-24 h-11 rounded-md text-Black font-medium border-0 outline-none ">LogOut</Link>
                                </div>
                            </>
                            :
                            <Link to={"/login"} className="btn bg-[#F9A51A] w-24 h-11 rounded-md text-Black font-medium border-0 outline-none ">Login</Link>
                    }
                </div>


            </div>


        </>
    );
};

export default Nav_2;