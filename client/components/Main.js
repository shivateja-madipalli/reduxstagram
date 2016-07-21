import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/"> Reduxstagram </Link>
        </h1>

        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});


export default Main;

// React.cloneElement: This is for passing props from the parent component to child components
// This is the reason why all the child components of Main can access state and dispatch via Props
