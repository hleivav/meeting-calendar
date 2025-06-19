import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top w-100">
      <div className="d-flex justify-content-between align-items-center w-100 px-3">
        {/* Calendar icon */}
        <Link className="navbar-brand" to="/">
          <i className="fas fa-calendar-alt"></i>
        </Link>

        {/* Hamburger menu */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* I icon and Demo */}
        <div className="d-flex align-items-center text-light">
          <i className="fas fa-info-circle me-2"></i>
          <span>Demo</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

