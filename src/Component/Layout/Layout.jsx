import React from 'react';

import { Outlet } from 'react-router-dom';
import StickyNavbar from '../Navbar/StickyNavbar';




const Layout = () => {
    return (
        <div>
            <StickyNavbar></StickyNavbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;