import React from "react";
import logo from './../../../app/assets/images/split-wise-logo.png'; 
import { Link } from "react-router-dom";
import MainDropDownContainer from "./main_dropdown/main_dropdown_container";

class AppHeader extends React.Component { 

    constructor(props) {
        super(props);
        
    }

    render(){
        
        return (
            <>
                <div className="app-header-wrap">
                    <header>
                        <a href="/" className="app-logo-link">
                            <img className="" src={logo} alt="logo" />
                            <span>SplitBuys</span>
                        </a>
                        
                        <MainDropDownContainer />
                    </header>
                </div>
            </>
        )
    }
}

export default AppHeader;