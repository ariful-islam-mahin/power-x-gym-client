import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="d-flex justify-content-between flex-md-row flex-column flex-wrap">
            <div className="text-white mx-md-0 mx-auto">
                <h3 className="font-weight-bold">POWER <span className="text-brand">X</span></h3>
            </div>
            <div className="navLink d-flex flex-md-row flex-column ">
                <NavLink className="text-white mx-3 mb-1" to="/home">Home</NavLink>
                <NavLink className="text-white mx-3 mb-1" to="/services">Services</NavLink>
                <NavLink className="text-white mx-3 mb-1" to="/classes">Our Classes</NavLink>
                <NavLink className="text-white mx-3 mb-1" to="/about">About us</NavLink>
                <NavLink className="text-white mx-3 mb-1" to="/blog">Blog</NavLink>
                <NavLink className="text-white mx-3 mb-1" to="/pricing">Pricing</NavLink>
                <NavLink className="text-white mx-3 mb-1" to="/contact">Contact Us</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;