import React from "react";
import Activity from "./activity";
import LeftSidebarContainer from "../left_sidebar/left_sidebar_container";
import RightSidebarAds from "../right_sidebar/right_sidebar_ads";

const ActivityContainer = () => (
  <div className="app-container">
    <div>
      <LeftSidebarContainer />
      <Activity />
      <RightSidebarAds />
    </div>
  </div>
)

export default ActivityContainer;

