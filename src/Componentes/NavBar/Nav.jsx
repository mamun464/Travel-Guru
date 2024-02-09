import { NavLink } from "react-router-dom";


const Nav = () => {
    const navLink = <>
        <li><NavLink to={"/News"}>News</NavLink></li>
        <li><NavLink to={"/Destination"}>Destination</NavLink></li>
        <li><NavLink to={"/Blog"}>Blog</NavLink></li>
        <li><NavLink to={"/Contact"}>Contact</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-montserrat font-medium">
                        {navLink}

                    </ul>
                </div>
                <a className="btn btn-ghost text-xl w-36 h-20">
                    <img className="w-28 h-14" src="/logo.png" alt="Logo" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-montserrat font-medium">
                    {navLink}

                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Nav;