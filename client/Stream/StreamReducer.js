const initialState = [
  {
    id: '1',
    author: 'Corey Taylor',
    authorId: '1',
    authorAvatar: 1,
    text:
      'I am a world before I am a man, I was a creature before I could stand, I will remember before I forget, BEFORE I FORGET THAT!',
    date: '14:25',
  },
  {
    id: '2',
    author: 'Chester Bennington',
    authorId: '2',
    authorAvatar: 2,
    text:
      "I can't feel the way I did before, Don't turn your back on me, I won't be ignored ,Time won't heal this damage anymore, Don't turn your back on me, I won't be ignored",
    date: '14:30',
  },
  {
    id: '3',
    author: 'Wayne Static',
    authorId: '3',
    authorAvatar: 3,
    text: 'Oh, you do it again, You do it again, Destroyer',
    date: '15:05',
  },
];

const messages = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE': {
      return [...state, action.message];
    }

    case 'ADD_MESSAGES': {
      return [...state, ...action.messages];
    }

    default:
      return state;
  }
};

export default messages;
