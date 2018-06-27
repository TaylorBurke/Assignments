import React, { Component } from 'react';
import Comment from "./Comment";
import Reusable from "./Reusable";

class App extends Component {
  render() {
    const user = {
      image: 'https://i.pinimg.com/originals/fc/ea/9a/fcea9a5369ebbdca95dca1c0aa1e1a51.jpg',
      text: 'This is a comment',
      date: 'June 26, 2018'
    }
    return (
      <div>
        <Comment user={user} />
        
      </div>
    );
  }
}

export default App;
