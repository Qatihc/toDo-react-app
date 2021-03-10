import Header from './Header';
import React from 'react';

let HeaderContainer = function(props){
  return(
    <Header 
      leftPanel={
        'To-Do-React-LOGO'
      }
      rightPanel={
        'lgout'
      }
    />
  )
}

export default HeaderContainer;