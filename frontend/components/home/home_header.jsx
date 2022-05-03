import React from "react";
import { Link } from "react-router-dom";
import logo from './../../../app/assets/images/split-wise-logo.png'; // with import




const HomeHeader = () => {
   
    return (
        <>
            <div className="home-head-wrap">
                <header>
                    <Link to="/" className="logo-link"> 
                        <img className="logo-link" src={logo} alt="logo" />
                        <span>SplitBuys</span>
                    </Link>
                    <div className="header-session-btns-wrap">
                        <div>
                            <Link to="/login">Log in</Link>
                        </div>
                        <Link to="/signup">Sign up</Link>
                    </div>
                </header>
                
            </div>
        </>
    )
}

export default HomeHeader; 