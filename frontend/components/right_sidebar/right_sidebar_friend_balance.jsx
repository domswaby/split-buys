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
  roundIt(num){
    return num.toFixed(2)
  }

  getBalance() {
    let friendAmount = 0;
    let myAmount = 0;

    this.props.expenses.forEach((expense) => {

      if (expense.expenders.includes(this.props.currentUserId) && expense.expenders.includes(Number(this.props.friendId))) {
        if (this.props.currentUserId === expense.payer_id) {
          myAmount += (expense.amount / expense.expenders.length);
          
        }
        if (Number(this.props.friendId) === expense.payer_id) {
          friendAmount += (expense.amount / expense.expenders.length);
          
        }
      }

      
    });

    if (friendAmount > myAmount) {
      return (
        <div className="friend-balance-you-owe">You owe {this.props.friendInfo.username} <p>{this.roundIt(friendAmount - myAmount)}</p></div>
      )
    } else {
      return (
        <div className="friend-balance-owes">{this.props.friendInfo.username} owes you <p>{this.roundIt(myAmount - friendAmount)}</p></div>
      )
    }
  }

  render(){
    return (
      <>
        <div className="right-sidebar-friend-wrap">
          <div>
            <ul className="sidebar-friend-settings">
              <li className="balance-bars">
                <button ><FaBars onClick={() => this.changeShow('balance')}/></button>
              </li>
              <li className="balance-gear">
                <button ><MdSettings onClick={() => this.changeShow('settings')}/></button>
              </li>
            </ul>
            <div className={"remove-friend-btn-wrap " + (this.state.show === 'settings' ? 'show-remove-settings' : '')} >
              <button onClick={this.handleDeleteFriend}>Remove Friend</button>
            </div>
            <div className={ "friend-balance " + (this.state.show === 'balance' ? 'show-friend-balance' : '')}>
              <h1>YOUR BALANCE</h1>
              {this.props.friendInfo ? this.getBalance() : null}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default RightSidebarFriendBalance; 