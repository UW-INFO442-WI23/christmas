import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg justify-content-between'>
            <NavLink className="navbar-brand brand nav-title h1 font-weight-bold" to="/" aria-label="Logo and Home Button">
                Sleep'N'See
                <img src={'INFO442/christmas/src/img/logo.png'} alt='logo'></img>
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