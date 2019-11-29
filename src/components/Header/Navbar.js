import React from "react";
import "./navbar.css";
import Logo from "../../assets/logo.png";
import Profile from "../../assets/profile.png";

function Navbar() {
    return (
        <nav className="header">
            <div className="nav_wrapper">
                <div className="logo_wrapper">
                    <img src={Logo} />
                </div>

                <div className="search_wrapper">
                    <input type="text" placeholder="Search" />
                </div>

                <div className="profileImageWrapper">
                    <button>Trending</button>
                    <img src={Profile} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;