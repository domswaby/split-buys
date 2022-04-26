import React from "react";
import Friend from "./friend";
import LeftSidebar from "../left_sidebar/left_sidebar";
import RightSidebarAds from "../right_sidebar/right_sidebar_ads";

const FriendContainer = () => (
  <div className="app-container">
    <div>
      <LeftSidebar />
      <Friend />
      <RightSidebarAds />
    </div>
  </div>
)

export default FriendContainer;

