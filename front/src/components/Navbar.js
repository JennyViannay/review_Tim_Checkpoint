import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";


const Navbar = () => {


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light navBar">
                <Link className="navbar-brand text-dark" to="/">
                        <li className='titlelinkWildCircus'>Wild Circus.</li>
                </Link>
                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon white"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">
                        <Link className="nav-item nav-link mr-5 " to="/">
                            <li>Home</li>
                        </Link>
                        <Link className="nav-item nav-link mr-5" to="/news">
                            <li>News</li>
                        </Link>
                        <Link className="nav-item nav-link mr-5" to='/contact'>
                            <li>Contact</li>
                        </Link>
                        <Link className="nav-item nav-link mr-5" to='/gallery'>
                            <li>Gallery</li>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;