import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top w-100">
      <div className="d-flex justify-content-between align-items-center w-100 px-3">
        {/* Calendar icon */}
        <a className="navbar-brand" href="#">
          <i className="fas fa-calendar-alt"></i>
        </a>

        {/* Hamburger menu */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
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
