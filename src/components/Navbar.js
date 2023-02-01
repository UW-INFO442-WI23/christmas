import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../img/logo.png"
function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg justify-content-between'>
            <NavLink className="navbar-brand brand font-weight-bold ms-3" to="/" aria-label="Logo and Home Button">
                <img className="logo_pic" src={logo} alt='logo'></img>
            </NavLink>
        
            <div className="form-inline" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto ms-auto">
                    <li className='nav-item me-5'>
                        <NavLink className='nav-text fw-bolder' to='/about'>about</NavLink>
                    </li>
                    <li className='nav-item me-5'>
                        <NavLink className='nav-text fw-bolder' to='/resources'>resources</NavLink>
                    </li>
                    <li className='nav-item me-5'>
                        <NavLink className='nav-text fw-bolder' to='/login'>login</NavLink>
                    </li>
                </ul>
            </div>
      </nav>
    )
}

export default Navbar;