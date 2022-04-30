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
      showModal: false,
      email: ""
    }; 
    this.toggleModal = this.toggleModal.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log(props);
  }

  componentDidMount(){
    if(this.props.currentUser.friends){
      this.props.receiveCurrentUser(this.props.currentUser);
    }
  }

  toggleModal() {
    let show = this.state.showModal;
    this.setState({
      showModal: !show
    });
  }

  update() {
    return (e) => {
      this.setState( {
        email: e.currentTarget.value
      }); 
    }; 
  }

  handleSubmit() {
    
    console.log(this.state.email);
    let friendship = {
      user_id: this.props.currentUserId,
      friend_email: this.state.email
    }; 
    this.props.createFriend(friendship)
      .then((res) => {
          console.log(res); 
          this.setState({showModal: false});
      });
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

        <FriendModal 
            toggleModal={this.toggleModal} 
            update={this.update} 
            showModal={this.state.showModal} 
            email={this.state.email}
            handleSubmit={this.handleSubmit}
        />

      </div>
    )
  }
}

export default LeftSidebar; 