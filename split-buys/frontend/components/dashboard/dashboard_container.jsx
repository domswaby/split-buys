import React from "react";
import Dashboard from "./dashboard";
import LeftSidebar from "../left_sidebar/left_sidebar";
import RightSidebarAds from "../right_sidebar/right_sidebar_ads";

const DashboardContainer = () => (
    <div class="app-container">
        <div>
            <LeftSidebar />
            <Dashboard />
            <RightSidebarAds />
        </div>
    </div>
)

export default DashboardContainer;

