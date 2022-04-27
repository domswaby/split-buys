import React from "react";
import logo from './../../../app/assets/images/split-wise-logo.png'; // with import
import { CgClose  } from 'react-icons/cg'; 
const FriendModal = (props) => {
    return (
        <div onClick={() => props.toggleModal()} 
             className={'friend-modal-container ' + (props.showModal ? 'show' : '')}>
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
                        value={props.email} 
                        onChange={props.update()}/>
                </div>
                <button 
                    onClick={() => props.toggleModal()} 
                    className="close-friend-modal">
                    <CgClose />
                </button>
                <div className="add-friend-button-wrap">
                    <p>note: User must already be a member</p>
                    <button onClick={() => props.handleSubmit()}>Add friend</button>
                </div>
            </div>
        </div>
    )
}

export default FriendModal; 