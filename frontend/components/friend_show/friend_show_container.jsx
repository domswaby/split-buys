import React from "react";
import LeftSidebarContainer from "../left_sidebar/left_sidebar_container";
import RightSidebarFriendBalanceContainer from "../right_sidebar/right_sidebar_friend_balance_container";
import FriendShowWrap from "./friend_show_wrap";

const FriendShowContainer = (props) => {
    
    return (
      <div className="app-container">
        <div>
          <LeftSidebarContainer />
          <FriendShowWrap friendId={props.match.params.id} history={props.history}/>
          <RightSidebarFriendBalanceContainer friendId={props.match.params.id} history={history}/>
        </div>
      </div>
    )
}

export default FriendShowContainer;

