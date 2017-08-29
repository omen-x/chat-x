
const initialState = [
  {
    id: '1',
    name: 'Corey Taylor',
    avatar: 1
  },
  {
    id: '2',
    name: 'Chester Bennington',
    avatar: 1
  },
  {
    id: '3',
    name: 'Wayne Static',
    avatar: 1
  }
];


const users = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER': {
      return [...state, action.newUser];
    }

    case 'REMOVE_USER': {
      return state.filter(user => user.id !== action.userId);
    }

    default:
      return state;
  }
};


export default users;
