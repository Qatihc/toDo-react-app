import React from 'react';
import './style.scss'

function ToDoItem(props){
  let {toDo, toggleDone} = props;
  let isDoneClass = (toDo.done) ? 'to-do-item-done' : ''
  return(
    <li className={`to-do-item ${isDoneClass}`} onClick={() => toggleDone(toDo.id)}>
      {toDo.name}
    </li> 
  )
}

export default ToDoItem;