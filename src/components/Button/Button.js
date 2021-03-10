import React from 'react';
import './style.scss'

let Button = function(props) {
  return(
    <button onClick={props.onClick}>{props.children}</button>
  )
}

export default Button;