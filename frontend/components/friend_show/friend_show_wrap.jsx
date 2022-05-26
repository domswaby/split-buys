import React from "react";
import { connect } from "react-redux";
import FriendShow from "./friend_show";
import { selectUser } from "../../selectors/selectors";
import { getFriendInfo } from "../../selectors/selectors";
import { receiveCurrentUser } from "../../actions/session_actions";
import { destroyExpense } from "../../actions/expense_actions";
import { makeComment } from "../../actions/comment_actions";
import { destroyComment } from "../../actions/comment_actions";


const mSTP = (state, ownProps) => {
    
  return {
    currentUserId: state.session.id,
    currentUser: selectUser(state.entities.users, state.session.id),
    expenses: Object.values(state.entities.expenses),
    users: Object.values(state.entities.users),
    friendId: ownProps.friendId,
    friendInfo: getFriendInfo(state, ownProps.friendId),
    comments: Object.values(state.entities.comments)
  };

}; 

const mDTP = (dispatch, ownProps) => {
  
  return {
    receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user)),
    destroyExpense: (expenseId) => dispatch(destroyExpense(expenseId)),
    makeComment: (commentInfo) => dispatch(makeComment(commentInfo)),
    destroyComment: (commentId) => dispatch(destroyComment(commentId))
  };
  
}; 
  

export default connect(mSTP, mDTP)(FriendShow); 