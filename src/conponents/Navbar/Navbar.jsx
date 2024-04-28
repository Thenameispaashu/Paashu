import React from "react";
import './Navbar.css';
import  { useState } from 'react';
import MobileNav from "../Mobile Nav/MobileNav";



      

const Navbar = () => {

  const [openMenu, setopenMenu] = useState(false);
  const toggleMenu = () => {
      setopenMenu(!openMenu);
  };
  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} /> 

      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src="./assets/images/logo.png" alt="" />

          <ul>
            <li><a className="menu-item">Home</a></li>
            <li><a className="menu-item">Skills</a></li>
            <li><a className="menu-item">Work Experience</a></li>
            <li><a className="menu-item">Contact Me</a></li>
            <button className="contact-btn" onClick={() => {}} >Hire Me</button>
          </ul>

          <button className="menu-btn"  onClick={toggleMenu}> <span class={"material-symbols-outlined"} style={{fontSize:"1.8rem"}} >{openMenu ? "close" : "menu"}</span> </button>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
