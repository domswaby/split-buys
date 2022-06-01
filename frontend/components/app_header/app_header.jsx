import React from "react";
// import logo from './../../../app/assets/images/split-wise-logo.png'; 
// import swLogo from './../../../app/assets/images/sw-svg-logo.svg'; 
import { Link } from "react-router-dom";
import MainDropDownContainer from "./main_dropdown/main_dropdown_container";

class AppHeader extends React.Component { 

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
        // if (this.props.currentUser.friends) {

        //     this.props.receiveCurrentUser(this.props.currentUser);
        // }
    }

    render(){
        
        return (
            <>
                <div className="app-header-wrap">
                    <header>
                        <Link to="/" className="app-logo-link">
                            <img className="" src={window.logo} alt="logo" />
                            {/* <img src={swLogo} alt="logo" /> */}
                            
                            <span>SplitBuys</span>
                        </Link>
                        
                        <MainDropDownContainer history={this.props.history}/>
                    </header>
                </div>
            </>
        )
    }
}

export default AppHeader;
