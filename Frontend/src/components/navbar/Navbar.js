
import React, {useState} from 'react';

import './Navbar.css';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <>
          <nav className="navbar">
            <div className="navbar-container">

              <Link className="navbar-logo" to="..">HearthstoNe</Link> 
              <Link className="navbar-logo"to="../list-of-spells">Spells</Link>
            </div>


          </nav>
        </>
    )
}

export default Navbar;
