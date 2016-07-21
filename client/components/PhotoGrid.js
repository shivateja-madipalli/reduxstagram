import React from 'react';
import Photo from './Photo';

const PhotoGrid = React.createClass({
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) => <Photo {... this.props} key={i} i={i } post={post}/>)}
      </div>
    )
  }
});


export default PhotoGrid;


// <pre>
//   {JSON.stringify(this.props.posts, null, ' ')}
// </pre>

// <div className="photo-grid">
//   {this.props.posts.map((post, i) => <Photo {... this.props} key={i} i={i} post={post}/>)}
// </div>

// Here, "Spread (...) operator" is looping through all of the props and passing them down to Photo component
// key={i} is for react as it gives us a warning for not having a unique key for every value we pass on

// i={i} is for having a index for each and every value we pass

// why cant we use key for index and why do we need to pass index separately?

// key cannot be accessed in photo component as it is confined only for react but not for components to use it

//post={post} is for sending the actual individual post info
