import React from "react";
import Expenses from "./expenses";
import LeftSidebar from "../left_sidebar/left_sidebar";
import RightSidebarAds from "../right_sidebar/right_sidebar_ads";

const ExpensesContainer = () => (
  <div className="app-container">
    <div>
      <LeftSidebar />
      <Expenses />
      <RightSidebarAds />
    </div>
  </div>
)

export default ExpensesContainer;

