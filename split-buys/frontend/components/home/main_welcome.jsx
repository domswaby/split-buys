import React from "react";
import Star from "../svgs/star";
import Logo from "../svgs/logo";
import Heart from "../svgs/heart";
import House from "../svgs/house";
import Airplane from "../svgs/airplane";
import OpenLetter from "../svgs/open_letter";
import PurpleDiamond from "../svgs/purple_diamond";

const MainWelcome = () => {
    return (
        <div className="main-welcome-wrap">
            <h1>Main Welcome</h1>
            <Star />
            <Logo />
            <Heart />
            <House />
            <Airplane /> 
            <OpenLetter />
            <PurpleDiamond />
        </div>
    )
}

export default MainWelcome; 