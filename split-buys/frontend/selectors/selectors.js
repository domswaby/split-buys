export const selectBenches = (benchesObject) => {
  return Object.values(benchesObject);
}; 

export const selectFriends = (usersSlice, currentUserId) => {
  return Object.values(usersSlice).filter( user => user.id !== currentUserId)
};