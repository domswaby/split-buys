export const selectBenches = (benchesObject) => {
  return Object.values(benchesObject);
}; 

export const selectFriends = (usersSlice, currentUserId) => {
  
  return Object.values(usersSlice).filter( user => user.id !== currentUserId)
};

export const getFriendInfo = (state, friendId) => {
   let users = Object.values(state.entities.users); 
   
   for(let x = 0; x < users.length; x++){
     if(users[x].id == friendId ){
       return users[x]; 
     }
   }
   return null;
}; 
export const selectUser = (usersSlice, currentUserId) => {
   let users = Object.values(usersSlice); 
   for(let x = 0; x < users.length; x++){
     if(users[x].id == currentUserId ){
       return users[x]; 
     }
   }
   return null;
}; 

export const getMyFriend = (state, friendId) => {
  let users = Object.values(state.entities.users);
  
  for (let x = 0; x < users.length; x++) {
    if (users[x].id == friendId) {
      return users[x];
    }
  }
  return null;
}; 
