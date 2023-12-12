import React from 'react';

const Navbar = ({ toggleNav }) => {
  return (
    <div id="navbar-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-inner">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="navbar-brand mr-auto" href="#" id="navbar-logo" style={{ maxHeight: '20px' }}>
                  <img src="imgs/res-logo.png" alt="Logo" height="30" />
                </a>
              </li>
              <li className="nav-item" onClick={toggleNav}>
                <a className="nav-link" href="#">
                  ☰
                </a>
              </li>
              <li className="nav-item" id="my-search-box">
                <div className="mx-auto" id="my-search-box">
                  <form className="form-inline my-2 my-lg-0">
                    <input className="form-control w-50" type="search" placeholder="Search" aria-label="Search" />
                  </form>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
