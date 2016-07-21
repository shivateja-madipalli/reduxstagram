// increment likes

export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// add comments
export function addComment(postId, author, comment) {
  console.log("Dispatching add Comment");
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

//remove comments
export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}


//These are called Action creators,
//Coz,

// {
//   type: 'INCREMENT_LIKES',
//   index
// }

//this is the action and
// export function increment(index) {
//   return {
//     type: 'INCREMENT_LIKES',
//     index
//   }
// }

// the above function call is creating the action
