import React from "react";
import Logo from "../../../Component/Logo";
import { Link, NavLink } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import { BsArrowUpRightCircle } from "react-icons/bs";

const NavBar = () => {

  const {user,userLogout}=useAuth()
  const handleLogout=()=>{
       userLogout()
       .then()
       .then((error)=>{
        console.log(error)
       })
  }
    const navLink=<>
             <li><NavLink to='/'>Services</NavLink></li>
             <li><NavLink to='/send-percel'>Send Percel</NavLink></li>
            <li><NavLink to='/coverage'>Coverage</NavLink></li>

            {
              user && <>
                  <li><NavLink to='/dashboard/my-parcels'>My Percels</NavLink></li>
               </>
            }
    </>
  return (
    <div className="navbar bg-base-100 shadow-sm mb-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLink}
          </ul>
        </div>
              <Logo/>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {navLink}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user? <Link onClick={handleLogout} className="btn">Log Out</Link> : <Link to='/login' className="btn">Login</Link>
        }
            <button className="btn bg-primary mx-4 text-black text-[1rem] font-medium"><Link to='/rider'>Be A Rider</Link></button>
         
      </div>
    </div>
  );
};

export default NavBar;
