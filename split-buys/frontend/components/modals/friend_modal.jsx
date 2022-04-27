import React from "react";

const FriendModal = (props) => {
    return (
        <div onClick={() => props.toggleModal()} className={'friend-modal-container ' + (props.showModal ? 'show' : '')}>
            <div onClick={(e) => {
                e.stopPropagation();
            }} className="friend-modal">
                <h1>Modals are cool</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eum neque, reiciendis placeat sint beatae laborum accusamus itaque recusandae quod! Cumque placeat autem dolor illo quam vitae magni? Saepe, ipsam!</p>
                <button onClick={() => props.toggleModal()} className="close-friend-modal">Close</button>
            </div>
        </div>
    )
}

export default FriendModal; 