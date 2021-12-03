
import React, {useState} from 'react';

import './Navbar.css';
import {Link} from "react-router-dom";

const Navbar = ({prop, name}) => {
    return (
        <>
          <nav className="navbar">
            <div className="navbar-container">

              <Link className="navbar-logo" to="..">HearthstoNe</Link> 
              <Link className="navbar-logo"to={`../${prop}`}>{name}</Link>
            </div>


          </nav>
        </>
    )
}

export default Navbar;
