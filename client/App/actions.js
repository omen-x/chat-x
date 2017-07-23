
const setUserData = data => ({
  type: 'SET_USER_DATA',
  data
});

const fetchUserData = data => ({
  type: 'FETCH_USER_DATA',
  data
});


export default {
  setUserData
};
