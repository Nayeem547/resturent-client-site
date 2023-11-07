

import React from 'react';
import logo from '../../assets/logo-inverse-301x105.png'
const MyFooter = () => {
  return (
    <div>
      <div>
            <footer className="footer p-10 bg-black text-neutral-content">
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    {/* <header >{logo}</header>  */}
    <img className=" h-16 text-white" src={logo} alt="" />
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    </div>
  );
};

export default MyFooter;