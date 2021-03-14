import React from 'react';
import {ToDoList} from '../ToDoList';
import {AddToDoForm} from '../AddToDoForm';

import './style.scss'

function ToDoCategory(props){
  let {category, toggleDone, saveToDo, nextCategory, previousCategory} = props;

  return(
    <div className="category">
      <div className="category-head">
        <h2 className="category-name">{category.name}</h2>
        <button className="category-next-btn" onClick={nextCategory}></button>
        <button className="category-prev-btn" onClick={previousCategory}></button>
      </div>
      <div className="to-do-list-wrap">
        <ToDoList 
          toDos={category.toDos} 
          toggleDone={toggleDone} 
        />
        <AddToDoForm 
          saveToDo={saveToDo}
        />
      </div>
    </div>
  )
}

export default ToDoCategory;