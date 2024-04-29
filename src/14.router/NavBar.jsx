import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom'

export default function NavBar() {
    return (

        <nav>
            <Link to='/ '>Home</Link>
            <Link to='/about'>About</Link>
        </nav>

    )
}
