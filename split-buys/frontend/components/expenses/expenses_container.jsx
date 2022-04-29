import React from "react";
import Expenses from "./expenses";
import RightSidebarAds from "../right_sidebar/right_sidebar_ads";
import LeftSidebarContainer from "../left_sidebar/left_sidebar_container"; 

const ExpensesContainer = () => (
  <div className="app-container">
    <div>
      <LeftSidebarContainer />
      <Expenses />
      <RightSidebarAds />
    </div>
  </div>
)

export default ExpensesContainer;

