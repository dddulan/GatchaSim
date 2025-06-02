import React from 'react';
import {Link,useParams} from 'wouter';
import './Navbar.css';

export const NavBar=({userInput})=>{

   

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                {<img src="/images/popmartlogo.png" alt="Pop Mart Logo" />}
            </div>
            
            <ul className="navbar-links">
            <li>Welcome {userInput}</li>
            <li><Link href="/main">BOXES</Link></li>
            
            </ul>

        </nav>
    );


};
export default NavBar;