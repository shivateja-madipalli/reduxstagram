import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


//import reducers

import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({posts, comments, routing: routerReducer});

// in combineReducers we need to pass in the reducers and also the routing because we will have three things stored in our store, posts, comments and also the changes of our urls

export default rootReducer;
