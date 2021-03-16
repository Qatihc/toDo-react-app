import React from 'react';

import {ToDoList} from '../ToDoList';
import {AddToDoForm} from '../Form';
import ToDo from '../../models/ToDo';
import generateId from '../../helpers/generateId'

import './style.scss'

function ToDoCategory(props){
  const {category, modifyCurrentCategory} = props;

  function toggleDone(id){
    const toDos = category.toDos;
    const updatedToDos = toDos.map(toDo => 
      (toDo.id === id) ? {...toDo, done: !toDo.done} : toDo
    )

    modifyCurrentCategory({toDos: updatedToDos})
  }

  function makeToDo(toDo){
    const id = generateId();
    return new ToDo({...toDo, id})
  }

  function renderNewToDo(toDo){
    /* agregar validacion... */
    let updatedToDos = category.toDos.concat([toDo]);
    modifyCurrentCategory({toDos: updatedToDos});
  }

  return(
    <div className="category-wrap">
      <div className="category-head">
        <h2 className="category-name">{category.name}</h2>
      </div>
      <div className="to-do-list-wrap">
        <ToDoList 
          toDos={category.toDos} 
          toggleDone={toggleDone} 
        />
        <AddToDoForm 
          makeToDo={makeToDo}
          renderNewToDo={renderNewToDo}
        />
      </div>
    </div>
  )
}

export default ToDoCategory;