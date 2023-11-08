import React, { useEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';
import StickyNavbar from '../Navbar/StickyNavbar';

import spinner from "./layout.css"


const Layout = () => {

    const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
    
  useEffect(() => {
    // Simulate an API call with setTimeout
    setTimeout(() => {
      // Set data and mark loading as complete
      setData(/* Your data */);
      setIsLoading(false);
    }, 2000); // Simulated 2-second loading time
  }, []);


    return (
        <div>

<div className="container">
      {isLoading ? (
        <div className=" justify-center text-center mx-auto flex items-center spinner"></div>
      ) : (
        <div className="content">
         <StickyNavbar></StickyNavbar>
            <Outlet></Outlet>
        </div>
      )}
    </div>

            
            
        </div>
    );
};

export default Layout;