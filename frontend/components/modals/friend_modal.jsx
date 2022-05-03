import React from "react";
import logo from './../../../app/assets/images/split-wise-logo.png'; // with import
import { CgClose  } from 'react-icons/cg'; 

class FriendModal extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            email: ""
        };
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    update() {
        return (e) => {
            this.setState({
                email: e.currentTarget.value
            });
        };
    }

    handleSubmit() {

        
        let friendship = {
            user_id: this.props.currentUserId,
            friend_email: this.state.email
        };
        this.props.createFriend(friendship)
            .then((res) => {
                
                this.props.toggleFriendModal();
            });
    }

    render(){
        return (
            <div onClick={() => this.props.toggleFriendModal()} 
                className={'friend-modal-container ' + (this.props.showFriendModal ? 'show' : '')}>
                <div onClick={(e) => {
                    e.stopPropagation();
                }} className="friend-modal">
                    <h1>
                        <div className="friend-modal-logo-wrap">
                            <img src={logo} alt="" /> 
                        </div> 
                        Invite friends</h1>
                    <div className="friend-modal-email">
                        <input 
                            type="text" 
                            placeholder="Enter a user email address" 
                            value={this.state.email} 
                            onChange={this.update()}/>
                    </div>
                    <button 
                        onClick={() => this.props.toggleFriendModal()} 
                        className="close-friend-modal">
                        <CgClose />
                    </button>
                    <div className="add-friend-button-wrap">
                        <p>note: User must already be a member</p>
                        <button onClick={() => this.handleSubmit()}>Add friend</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default FriendModal; 