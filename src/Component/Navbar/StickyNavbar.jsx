import React, { useContext } from 'react';
import logo from '../../assets/logo-inverse-301x105.png'
import {  Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';



const StickyNavbar = () => {
 
 
  // const { user, logOut } = useContext(AuthContext);

  const { user, logOut } = useContext(AuthContext);
     
  const handleSignOut = () => {
    logOut().then().catch();
  };

  return (
    <div className="navbar bg-black">
  <div className="navbar-start">
    
    <img className=' h-16 ' src={logo} alt="" />
  </div>
  <div className="navbar-center  lg:flex">
    <ul className=" text-white flex justify-center gap-6 hover:text-red-600 px-1">
      <li>
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
     
      <li>
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
    </ul>
  </div>
  <div className="navbar-end ">

    <div className=' flex gap-4 '>

    
     
  {user ? (
             <div className="dropdown dropdown-end">
             <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
               <div className="w-10 rounded-full">
                 <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
               </div>
             </label>
             <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
               <li>
                 Add product
                  
                   
                 
               </li>
               <li>Add items</li>
               <li onClick={handleSignOut}>
                 SignOut
               </li>
             </ul>
           </div> 
     
            ) : (
              <Link to="/login">
                <button className=" btn "> Login</button>
              </Link>
            )}

            <Link to="/signUp">
              <button className=" btn "> SignUp</button>
            </Link>
            </div>

  </div>
</div>

  );
};

export default StickyNavbar;

{/* <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </label>
        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>  */}


//  <NavLink
//                 to="/"
//                 className={({ isActive, isPending }) =>
//                   isPending
//                     ? "pending"
//                     : isActive
//                     ? " bg-red-600 px-3 py-2 text-white rounded-lg "
//                     : ""
//                 }
//               >
//                 Home
//               </NavLink> 


            //   <NavLink
            //   to="/allfood"
            //   className={({ isActive, isPending }) =>
            //     isPending
            //       ? "pending"
            //       : isActive
            //       ? " bg-red-600 px-3 py-2 text-white rounded-lg "
            //       : ""
            //   }
            // >
            //   All Food Items
            // </NavLink>