import React, { Component } from 'react';

import './reset.scss'
import './style.scss'
import {HeaderContainer} from '../Header';
import {ToDoApp} from '../ToDoApp';

class App extends Component {
  render() {
    return(
        <ToDoApp/>
    )
  }
}

export default App;

