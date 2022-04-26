import React from "react";
import { Link } from "react-router-dom";
import { FaFlag } from 'react-icons/fa'; 
import { GoListUnordered } from 'react-icons/go';
import { GoPerson } from 'react-icons/go';
import logo from './../../../app/assets/images/split-wise-logo.png'; 

const LeftSidebar = () => {
  return (
    <div className="left-sidebar-wrap">
      <div>
        <div className="dashboard-tab">
          <Link to="/dashboard"><img src={logo} alt="" />Dashboard</Link>
        </div>
        <div className="activity-tab">
          <Link to="/activity"><FaFlag className="activity-flag" />Recent activity</Link>
        </div>
        <div>
          <div className="expenses-tab">
            <Link to="/all"><GoListUnordered className="expenses-list-icon" />All expenses</Link>
          </div>
          <div className="friends-list-wrap">
            <h3> <span>FRIENDS</span> <span onClick={() => console.log("clicked the span")} className="add-friend-span">+ add</span> </h3>
            <ul>
              <li>   
                <Link to="/friend"><GoPerson className="friend-icon" />Friend 1</Link>
              </li>
              <li>
                  
                <Link to="/friend"><GoPerson className="friend-icon" />Friend 2</Link>
              </li>
              <li>
                <Link to="/friend"><GoPerson className="friend-icon" />Friend 3</Link>
                </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LeftSidebar; 