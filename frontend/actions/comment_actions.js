import { deleteComment, createComment } from "../util/comment_api_util";
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS'

const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

const removeComment = (comment) => ({
  type: REMOVE_COMMENT,
  comment
});

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_COMMENT_ERRORS,
    errors
  };
};

export const makeComment = (commentInfo) => dispatch => {
  return createComment(commentInfo)
    .then((comment) => dispatch(receiveComment(comment)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)));
};

export const destroyComment = (commentId) => dispatch => {
  return deleteComment(commentId)
    .then((comment) => dispatch(removeComment(comment)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)));
};