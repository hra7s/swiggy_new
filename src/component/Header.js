import React from 'react';
import { LOGO_URL } from '../utils/constants';

const Header = ()=>{
    return (
        <div className="header">
            <div className='logo'>
                <img  className="logo" alt="logo-image" src={LOGO_URL} />
            </div>
            <div className='navItems'>
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Cart</li>
                        </ul>
            </div>
        </div>
    )
}

export default Header