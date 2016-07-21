function postComments(state = [], action) {
  // console.log('action.type', action.type);
  switch(action.type) {
    case 'ADD_COMMENT':
      // return the new state with tne new comment
      return [...state, {
        user: action.author,
        text: action.comment
      }];
      // console.log('ADD_COMMENT SWITCH STATEMENT');
    case 'REMOVE_COMMENT':
      console.log("Removing a comment");
      // return the new state without the deleted comment
      return [
        //from the start to the one to delete
        ...state.slice(0,action.i),
        //after the deleted one
        ...state.slice(action.i + 1)
      ]
      return state;
    default:
      return state;
  }
  return state;
}
function comments(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    console.log('NOT UNDEFINED');
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;


//
// // reducer takes in two things:
// // 1. the action (info about what happend)
// // 2. copy of the current state, in terms of store
//
// // and returns updated state
//
// //this is for updating individual comments
// function postComments(state = [], action) {
//   switch(action.type) {
//     case 'Add_COMMENT':
//       //return the new state with tne new comment
//       // return [...state, {
//       //   user: action.author,
//       //   text: action.comment
//       // }];
//       console.log('ADD_COMMENT');
//     case 'REMOVE_COMMENT':
//       return state;
//     default:
//       return state;
//   }
//   return state;
// }
//
// //this is for updating the entire comments state
// function comments(state = [], action) {
//   // why state = []?
//   // for the first time the reducer is going to run the state will not be equal to anything
//   // console.log(state, action);
//
//   // checking if action.postId is there or not
//   if(typeof action.postId !== 'undefined') {
//     console.log('NOT UNDEFINED');
//     return {
//       // take the current state
//       ...state,
//       //overwrite this post with a new one
//       //the below one is called reducer composition
//       [action.postId]: postComments(state[action.postId], action)
//     }
//   }
//   return state;
// }
//
// export default comments;
