import React from 'react';
import './style.scss'

function Header(props){
  return(
    <header className="header-wrap">
      <div className="header-left-panel">
        {props.leftPanel}
      </div>
      <div className="header-right-panel">
        {props.rightPanel}
      </div>
    </header>
  )
}

export default Header;