import React from "react";
import { FaFlag } from 'react-icons/fa'; 
import { GoListUnordered } from 'react-icons/go';
import { GoPerson } from 'react-icons/go';
import logo from './../../../app/assets/images/split-wise-logo.png'; 

const LeftSidebar = () => {
  return (
    <div className="left-sidebar-wrap">
      <div>
        <div className="dashboard-tab">
          <a href="#/dashboard"> <img src={logo} alt="" />Dashboard</a>
        </div>
        <div className="activity-tab">
          <a href="#/activity"><FaFlag class="activity-flag" />Recent activity</a>
        </div>
        <div>
          <div className="expenses-tab">
            <a href="#/all"><GoListUnordered className="expenses-list-icon" />All expenses</a>
          </div>
          <div className="friends-list-wrap">
            <h3> <span>FRIENDS</span> <span>+ add</span> </h3>
            <ul>
              <li>
                  <GoPerson className="friend-icon"/>
                <a href="">Friend 1</a>
              </li>
              <li>
                  <GoPerson className="friend-icon"/>
                <a href="">Friend 2</a>
              </li>
              <li>
                <GoPerson className="friend-icon"/>
                <a href="">Friend 3</a>
                </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LeftSidebar; 