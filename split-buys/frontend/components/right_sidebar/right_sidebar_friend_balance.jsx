import React from "react";
import { FaBars } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';

class RightSidebarFriendBalance extends React.Component{ 
  constructor(props){
    super(props);
    
    this.state = {
      show: 'balance'
    }
    this.handleDeleteFriend = this.handleDeleteFriend.bind(this);
  }

  handleDeleteFriend() {   
     
    this.props.deleteFriend(this.props.friendId)
      .then((res) => {
        this.props.history.push('/dashboard'); 
      }); 
  }

  changeShow(eleName) {
    this.setState({
      show: eleName
    }); 
  }

  render(){
    return (
      <>
        <div className="right-sidebar-friend-wrap">
          <div>
            <ul className="sidebar-friend-settings">
              <li>
                <button><FaBars onClick={() => this.changeShow('balance')}/></button>
              </li>
              <li>
                <button><MdSettings onClick={() => this.changeShow('settings')}/></button>
              </li>
            </ul>
            <div className={"remove-friend-btn-wrap " + (this.state.show === 'settings' ? 'show-remove-settings' : '')} >
              <button onClick={this.handleDeleteFriend}>Remove Friend</button>
            </div>
            <div className={ "friend-balance " + (this.state.show === 'balance' ? 'show-friend-balance' : '')}>
              <h1>Balance:</h1>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default RightSidebarFriendBalance; 