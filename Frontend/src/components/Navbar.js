import React, {useState} from 'react';
import './Navbar.css';

const Navbar = () => {
    // probably include some sort of state for navbar functionality 
    return (
        <>
          <nav className="navbar">
            <div className="navbar-container">
              <a className="navbar-logo"> {/*Navbar logo links back to homepage*/}
                  HearthstoNe
              </a>
              <div className="navbar-right">
                <p>Login</p>
                <p>Sign up</p>
              </div>
            </div>
          </nav>
        </>
    )
}

export default Navbar;
