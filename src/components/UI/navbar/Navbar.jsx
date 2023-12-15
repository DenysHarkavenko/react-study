import { Link } from 'react-router-dom';
import React from 'react';
import '../../../styles/App.css'

export function Navbar(){
    return(
        <div className='navbar'>
            <div className="navbar__links">
                <Link className='navbar__link-link' to="/about">About</Link>
                <Link className='navbar__link-link' to="/">Posts</Link>
            </div>
        </div>
    )
}
