import React from 'react'
import './Navbar.css'


function Navbar() {
    return (
        <header className="header">   
        <nav className="nav">
				<a className="nav_link" href="../Content/Users">Все</a>
				<a className="nav_link" href="/">Заблокированные</a>
				<a className="nav_link" href="/">Активные</a>
			</nav>
        </header>
    );
}

export default Navbar;
