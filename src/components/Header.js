import React from "react";
import { Link } from "react-router-dom";


function Header() {


    return(
        <header>
           <h1><img src={require("../assets/keul_logo.png")} alt="keul logo" className="keulLogo"></img></h1>
           <nav>
             <Link to="/" className="menu">intro</Link>
             <Link to="/selection" className="menu">selection</Link>
             <Link to="/reviews" className="menu">reviews</Link>
             <Link to="/thanks" className="menu">thanks</Link>
            </nav> 
        </header>
    )
}

export default Header;