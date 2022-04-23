import React from "react";
import logo from './../../../app/assets/images/split-wise-logo.png'; // with import



const HomeHeader = () => {
   
    return (
        <>
            <div className="home-head-wrap">
                <header>
                    <a href="/" className="logo-link"> 
                        <img className="logo-link" src={logo} alt="logo" />
                        <span>SplitBuys</span>
                    </a>
                    <div className="header-session-btns-wrap">
                        <div>
                            <a href="">Log in</a>
                        </div>
                        <a href="">Sign up</a>
                    </div>
                </header>
                
            </div>
        </>
    )
}

export default HomeHeader; 