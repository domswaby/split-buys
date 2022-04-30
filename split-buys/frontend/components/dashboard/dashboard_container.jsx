import React from "react";
import DashboardWrap from "./dashboard_wrap"
import RightSidebarAds from "../right_sidebar/right_sidebar_ads";
import LeftSidebarContainer from "../left_sidebar/left_sidebar_container"; 

const DashboardContainer = () => (
    <div className="app-container">
        <div>
            <LeftSidebarContainer />
            <DashboardWrap />
            <RightSidebarAds />
        </div>
    </div>
)

export default DashboardContainer;

