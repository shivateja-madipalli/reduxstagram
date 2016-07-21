// reducer takes in two things:
// 1. the action (info about what happend)
// 2. copy of the current state, in terms of store

// and returns updated state

function posts(state = [], action) {
  // why state = []?
  // for the first time the reducer is going to run the state will not be equal to anything
  switch (action.type) {
    case "INCREMENT_LIKES":
      //return updated state
      console.log('Increment likes!');
      const i = action.index;
      return [
        ...state.slice(0,i), //before the one we are updating
        {...state[i],likes: state[i].likes + 1},
        ...state.slice(i + 1), // after the one we are updating
      ]
      break;
    default:
      return state;
  }

  return state;
}

export default posts;
