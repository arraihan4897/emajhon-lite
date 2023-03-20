import React from 'react';
import './Header.css';

import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='Headnav'>
          <img src={logo} alt="" />

          <div className='navLink'>

            <a href="/HOME">HOME</a> 
            <a href="/SHOP">SHOP</a> 
            <a href="/ORDER">ORDER</a>
            <a href="/INVENTORY">INVENTORY</a>
            <a href="/ABOUT">ABOUT</a>
            
           </div> 
            
        </nav>
    );
};

export default Header;