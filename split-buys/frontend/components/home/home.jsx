import React from "react";
import HomeHeader from "./home_header";
import MainWelcome from "./main_welcome";
import ScreenshotContainer from "./screenshot_container";
import FeatureSection from "./feature_section";
import Endorsements from "./endorsements";
import Footer from "./footer";


class Home extends React.Component {
    render() {
        return (
            <>
                <HomeHeader />
                <MainWelcome />
                <ScreenshotContainer /> 
                <FeatureSection /> 
                <Endorsements /> 
                <Footer /> 
            </>
        )
    }
}

export default Home