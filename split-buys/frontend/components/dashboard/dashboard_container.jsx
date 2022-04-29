import React from "react";
import Dashboard from "./dashboard";
import RightSidebarAds from "../right_sidebar/right_sidebar_ads";
import LeftSidebarContainer from "../left_sidebar/left_sidebar_container"; 

const DashboardContainer = () => (
    <div className="app-container">
        <div>
            <LeftSidebarContainer />
            <Dashboard />
            <RightSidebarAds />
        </div>
    </div>
)

export default DashboardContainer;

