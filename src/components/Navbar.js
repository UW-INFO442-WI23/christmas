import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../img/logo.png"
function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg justify-content-between'>
            <NavLink className="navbar-brand brand nav-title h1 font-weight-bold" to="/" aria-label="Logo and Home Button">
                <img className="logo_pic" src={logo} alt='logo'></img>
                Sleep'N'See
            </NavLink>
        
            <div className="form-inline" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto ml-auto">
                    <li className='nav-item mr-5'>
                        <NavLink className='text-purple' to='/about'>about</NavLink>
                    </li>
                    <li className='nav-item mr-5'>
                        <NavLink className='text-purple' to='/resources'>resources</NavLink>
                    </li>
                    <li className='nav-item mr-5'>
                        <NavLink className='text-purple' to='/login'>login</NavLink>
                    </li>
                </ul>
            </div>
      </nav>
    )
}

export default Navbar;