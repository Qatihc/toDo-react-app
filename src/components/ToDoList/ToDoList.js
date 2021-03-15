import React from 'react';
import {ToDoItem} from '../ToDoItem';


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