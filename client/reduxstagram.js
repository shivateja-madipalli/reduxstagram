// let's go!
import React from 'react';

import { render } from 'react-dom';

//Import css
import css from './styles/style.styl';

// Import Components
// import Main from './components/Main';
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

//import react router dependencies

import {Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store';

//difference in just store and { history } is because, store is the default export and where as history is named export.
// i.e.,
// in store.js, 'store' was exported default where as { history } was not exported default

// const router = (
//   <Provider store={store}>
//   <Router history={history}>
//     <Route path="/" component={Main}>
//       <IndexRoute component={PhotoGrid}> </IndexRoute>
//       <Route path="/view/:postId" component={Single}></Route>
//     </Route>
//   </Router>
//   </Provider>
// )

// the above code is old i.e.,
// before Main was used as root but now Main is replaced with App



const router = (
  <Provider store={store}>
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={PhotoGrid}> </IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </Router>
  </Provider>
)

//Provider tag will expose our store to entire application

// the way the above thing works:
// When ever "/" is accessed the IndexRoute component (PhotoGrid) will be loaded and
// when '/view:postId' is called then the Single component will be loaded
//thus, photoGrid and Single will be the children of Main component

render(router, document.getElementById('root'));
