import React from "react";
import Star from "../svgs/star";
import Logo from "../svgs/logo";
import Heart from "../svgs/heart";
import House from "../svgs/house";
import Airplane from "../svgs/airplane";
import OpenLetter from "../svgs/open_letter";
import PurpleDiamond from "../svgs/purple_diamond";
import TwitterBird from "../svgs/twitter_bird";
import Github from "../svgs/github";
import LinkedIn from "../svgs/linked_in";
import Apple from "../svgs/apple";
import Android from "../svgs/android";
// import facets_black from './../../../app/assets/images/facets_black.png'; // with import


const MainWelcome = () => {
   
    return (
        <div className="main-welcome-wrap">
            <h1>Main Welcome</h1>
            <Star />
            <Heart />
            <House />
            <Airplane /> 
            <OpenLetter />
            <PurpleDiamond />
            <TwitterBird />
            <Github />
            <LinkedIn />
            <Apple />
            <Android /> 
        </div>
    )
}

export default MainWelcome; 