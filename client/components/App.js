import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

// used * for importing all the things which were exported by actionCreators

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
  }

// in the above mapStateToProps, state.posts are saved in posts i.e., it means this.props.posts and same with comments

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

// calling Main right beside calling connect will add all the state prop and dispatch events to MAIN

// mapStateToProps: this will take our state, posts & comments
// mapDispatchToProps: this will take our actionCreators via props in our components

export default App;
