import React from "react";

const FriendShow = (props) => {
  
  return (
    <div className="dashboard-wrap">
      <h1>
        {props.friendInfo? (props.friendInfo.username.slice(0,1).toUpperCase() + props.friendInfo.username.slice(1).toLowerCase()) : null }
        <div>
          <button className="add-expense">Add an expense</button>
          <button className="settle-button">Settle up</button>
        </div>   
      </h1>
    </div>
  )
}

export default FriendShow;