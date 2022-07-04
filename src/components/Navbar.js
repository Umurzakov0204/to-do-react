import React from "react";
import {Link} from "react-router-dom"

export const Navbar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className="navbar-brand">
            Nore App
        </div>

        <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
            </li>
        </ul>
    </nav>
)