import React from "react";

const HomeHeader = () => {
    // const mystyle = {
    //     color: "red",
    //     fontFamily: 'Montserrat',
    //     padding: "10px"
    // };
    return (
        <>
            <div className="home-head-wrap">
                <header>
                    <a href="/" className="logo-link"> 
                        {/* <img src={require("./../../../app/assets/images/split-wise-logo.png")} alt="logo" /> */}
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