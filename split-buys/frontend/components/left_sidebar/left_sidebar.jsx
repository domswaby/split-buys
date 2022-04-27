import React from "react";
import { Link } from "react-router-dom";
import { FaFlag } from 'react-icons/fa'; 
import { GoListUnordered } from 'react-icons/go';
import { GoPerson } from 'react-icons/go';
import FriendModal from "../modals/friend_modal";
import logo from './../../../app/assets/images/split-wise-logo.png'; 

class LeftSidebar extends React.Component{

  constructor(props) { 
    super(props);
    this.state = {
      showModal: false
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    let show = this.state.showModal;
    this.setState({
      showModal: !show
    })
  }

  render(){
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
              <h3> <span>FRIENDS</span> <span onClick={() => this.toggleModal()} className="add-friend-span">+ add</span> </h3>
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

        <FriendModal toggleModal={this.toggleModal} showModal={this.state.showModal}/>

      </div>
    )
  }
}

export default LeftSidebar; 