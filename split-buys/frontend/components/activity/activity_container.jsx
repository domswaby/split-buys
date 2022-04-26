import React from "react";
import Activity from "./activity";
import LeftSidebar from "../left_sidebar/left_sidebar";
import RightSidebarAds from "../right_sidebar/right_sidebar_ads";

const ActivityContainer = () => (
  <div className="app-container">
    <div>
      <LeftSidebar />
      <Activity />
      <RightSidebarAds />
    </div>
  </div>
)

export default ActivityContainer;

