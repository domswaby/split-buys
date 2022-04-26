import React from "react";
import airplane from './../../../app/assets/images/green_airplane.png'; // with import
import Airplane from "../svgs/airplane";
import House from "../svgs/house";
import Heart from "../svgs/heart";
import Star from "../svgs/star";
import Apple from "../svgs/apple";
import Android from "../svgs/android";
import { Link } from "react-router-dom";

const MainWelcome = () => {
   
    return (
        <div className="main-welcome-wrap">
            <div>
                <div className="main-info-wrap">
                    <h1>Less stress when sharing expenses with <span>everyone</span></h1>
                    <div class="welcome-icons">
                        <Airplane /> 
                        <House />
                        <Heart /> 
                        <Star /> 
                    </div>
                    <div className="main-welcome-description">
                        <p>
                            Keep track of your shared expenses and balances with housemates, trips, groups, friends, and family.
                        </p>
                    </div>
                    <div class="big-signup-wrap">
                        <Link to="/signup">
                            <button>Sign up</button>
                        </Link>
                    </div>
                    <div className="main-welcome-icons">
                        <p>Free for <Apple /> iPhone, <Android /> Android, and web.</p>
                    </div>
                </div>
                <div className="main-picture-wrap">
                    <img src={airplane} alt="green airplane" />
                </div>
            </div>
        </div>
    )
}

export default MainWelcome; 