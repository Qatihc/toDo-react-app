import React, { Component } from 'react';

import './reset.scss'
import './style.scss'
import {HeaderContainer} from '../Header';
import {ToDoApp} from '../ToDoApp';

class App extends Component {
  render() {
    return(
      <div className="main-wrap">
        <HeaderContainer />
        <ToDoApp/>
      </div>
    )
  }
}

export default App;