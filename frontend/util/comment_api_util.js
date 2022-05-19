export const deleteComment = (commentId) => {
  return $.ajax({
    url: `/api/comments/${commentId}`,
    method: 'DELETE',
    error: err => console.log(err),
  });
};

export const createComment = (comment) => {
  return $.ajax({
    url: `/api/comments`,
    method: 'POST',
    data: { comment },
    error: err => console.log(err),
  });
};