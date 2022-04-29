import React from "react";

const FriendShow = (props) => {
  
  return (
    <div className="dashboard-wrap">
      <h1>{
          props.friendInfo? props.friendInfo.username : null 
        }</h1>
    </div>
  )
}

export default FriendShow;