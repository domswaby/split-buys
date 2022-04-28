export const deleteFriendship = (friendId) => {
  return $.ajax({
    url: `/api/friendships/${friendId}`,
    method: 'GET',
    error: err => console.log(err),
  });
};

export const createFriendship = (friendship) => {
  return $.ajax({
    url: `/api/friendships`,
    method: 'POST',
    data: {friendship},
    error: err => console.log(err),
  });
};


// friendship argument should look like 
// {
//   friendship: {
//     user_id: ...
//     friend_id: ....
//   }
// }



