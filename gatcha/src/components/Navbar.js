import React from 'react';
import {Link} from 'wouter';
import './Navbar.css';

export const NavBar=()=>{

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="/images/popmartlogo.png" alt="Pop Mart Logo" />
            </div>
            <ul className="navbar-links">
            <li><Link href="/">CATEGORIES</Link></li>
            </ul>

        </nav>
    );


};
export default NavBar;