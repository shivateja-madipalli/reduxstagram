import { createStore, compose } from 'redux';
import { syncHistoryWithStore  } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Why syncHistoryWithStore?
// hookup react router with out redux

// Why browserHistory
// TO connect two React router and redux
// we will modify the browserHistory a little bit

// import route reducer

import rootReducer from './reducers/reducerindex';


//importing Data
import comments from './data/comments';
import posts from './data/posts';

//create an obj for default data

// const defaultState = {
//   posts: posts,
//   comments: comments
// }

// In ES6 you dont need to give the key value if the object name and the key value is going to be same

const defaultState = {
  posts,
  comments
}

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

// if(module.hot) {
//   module.hot.accept('./reducers/', () => {
//     const nextRootReducer = require('./reducers/reducerindex').default;
//     store.replaceReducer(nextRootReducer);
//   });
// }

export default store;


// browserHistory will keep track of all the pages you've visited in the app
