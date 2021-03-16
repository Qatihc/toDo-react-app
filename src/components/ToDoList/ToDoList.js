import React from 'react';
import {ToDoItem} from '../ToDoItem';
import ReactCSSTransitionGroup from 'react-transition-group';


let ToDoList = function(props){
  let {toDos, toggleDone} = props;
  return(
    <ol>
        {toDos.map(toDo => 
          <ToDoItem  key={toDo.id} toDo={toDo} toggleDone={toggleDone}/>
        )}
    </ol>
  )
}

export default ToDoList;