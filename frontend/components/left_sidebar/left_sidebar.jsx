import React from "react";
import { Link } from "react-router-dom";
import { FaFlag } from 'react-icons/fa'; 
import { GoListUnordered } from 'react-icons/go';
import { GoPerson } from 'react-icons/go';
import FriendModalContainer from "../modals/friend_modal_container";
import logo from './../../../app/assets/images/split-wise-logo.png'; 

class LeftSidebar extends React.Component{

  constructor(props) { 
    super(props);
    this.state = {
      showFriendModal: false,
    }; 
    this.toggleFriendModal = this.toggleFriendModal.bind(this);

  }

  componentDidMount(){
    if(this.props.currentUser.friends){
      this.props.receiveCurrentUser(this.props.currentUser);
    }
  }
  
  toggleFriendModal() {
    let show = this.state.showFriendModal;
    this.setState({
      showFriendModal: !show
    });
  }

  render(){
    return (
      <div className="left-sidebar-wrap">
        <div>
          <div className="dashboard-tab">
            <Link to="/dashboard"><img src={logo} alt="" />Dashboard</Link>
          </div>
          {/* <div className="activity-tab">
            <Link to="/activity"><FaFlag className="activity-flag" />Recent activity</Link>
          </div> */}
          <div>
            <div className="expenses-tab">
              <Link to="/all"><GoListUnordered className="expenses-list-icon" />All expenses</Link>
            </div>
            <div className="friends-list-wrap">
              <h3> <span>FRIENDS</span> <span onClick={() => this.toggleFriendModal()} className="add-friend-span">+ add</span> </h3>
              <ul>
                {
                  
                  this.props.friends.map((friend) => {
                    return (<li key={friend.id}>
                      <Link to={`/friends/${friend.id}`}><GoPerson className="friend-icon" />{friend.username}</Link>
                    </li>)
                  }) 
                }
          
              </ul>
            </div>
          </div>
        </div>

        <FriendModalContainer
            toggleFriendModal={this.toggleFriendModal} 
            showFriendModal={this.state.showFriendModal} 
        />

      </div>
    )
  }
}

export default LeftSidebar; 