import React from "react";

function Navbar() {
  return (
    <header
      id="navbar"
      className="light fixed top-0 inset-x-0 flex items-center z-40 w-full lg:bg-transparent bg-white transition-all py-5"
    >
      <div className="container">
        <nav className="flex items-center">
          <a href="index.html">
            <img
              src="assets/images/logo-dark.png"
              className="h-8 logo-dark"
              alt="Logo Dark"
            />
            <img
              src="assets/images/logo-light.png"
              className="h-8 logo-light"
              alt="Logo Light"
            />
          </a>
          <div className="hidden lg:block ms-auto">
            <ul className="navbar-nav flex gap-x-3 items-center justify-center">
              <li className="nav-item">
                <a className="nav-link" href="#hero">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#clients">
                  Clients
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#feedback">
                  Feedback
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">
                  Plans
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
