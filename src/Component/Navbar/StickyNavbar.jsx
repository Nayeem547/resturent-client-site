import React, { useContext } from "react";
import logo from "../../assets/logo-inverse-301x105.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const StickyNavbar = () => {
  // const { user, logOut } = useContext(AuthContext);

  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
  };

  return (
    <div className="navbar flex flex-col gap-10 lg:flex-row bg-black">
      <div className=" navbar-center lg:navbar-start">
        <img className=" h-16 " src={logo} alt="" />
      </div>
      <div className="navbar-center   lg:flex">
        <ul className=" text-white flex justify-center gap-6  px-1">
          <li className=" hover:text-red-600 ">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " bg-red-600 px-3 py-2 text-white rounded-lg "
                  : ""
              }
            >
              Home
            </NavLink>
          </li>

          <li className=" hover:text-red-600 ">
            <NavLink
              to="/allfood"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " bg-red-600 px-3 py-2 text-white rounded-lg "
                  : ""
              }
            >
              All Food Items
            </NavLink>
          </li>


          <li className=" hover:text-red-600 ">
            <NavLink
              to="/blog"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " bg-red-600 px-3 py-2 text-white rounded-lg "
                  : ""
              }
            >
              Blog
            </NavLink>
          </li>


        </ul>
      </div>
      <div className=" navbar-end">
        <div className=" flex gap-4 ">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 text-xl font-semibold space-y-4  shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <Link to="/myAddFoods">
                  <li>My Add product</li>
                </Link>

                <Link to="/addfood">
                  <li>Add items</li>
                </Link>

                <Link to="/myorder">
                  <li>My Order Food</li>
                </Link>

                <li
                  className=" text-white text-md font-normal hover:bg-red-900 text-center rounded-lg bg-red-600 border px-1 py-1 "
                  onClick={handleSignOut}
                >
                  SignOut
                </li>
              </ul>
            </div>
          ) : (

            <div className=" flex gap-4 ">
          <div>
        <Link to="/login">
              <button className=" btn "> Login</button>
            </Link> 
            </div>
             <div>
          <Link to="/signUp">
           <button className=" btn "> SignUp</button>
           </Link>
            </div>
            </div>

           
            
          )}

          
        </div>
      </div>
    </div>
  );
};

export default StickyNavbar;
