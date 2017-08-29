
const setUsers = users => ({
  type: 'SET_USERS',
  users
});

const addUser = newUser => ({
  type: 'ADD_USER',
  newUser
});


const removeUser = userId => ({
  type: 'REMOVE_USER',
  userId
});


// ========>> EXPORT <<========

export default {
  setUsers,
  addUser,
  removeUser
};
