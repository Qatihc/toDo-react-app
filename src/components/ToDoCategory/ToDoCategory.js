import React from 'react';
import {ToDoList} from '../ToDoList';
import {AddToDoForm} from '../AddToDoForm';
import {AddToDoButton} from '../Button'

function ToDoCategory(props){
  let {category, toggleDone, saveToDoToCurrentCategory} = props;

  return(
    <div className="to-do-category">
      <div className="to-do-category-name">
        {category.name}
      </div>
      <div>
        <ToDoList 
          toDos={category.toDos} 
          toggleDone={toggleDone} 
        />
        <AddToDoButton />
        <AddToDoForm 
          saveToDoToCurrentCategory={saveToDoToCurrentCategory}
        />
      </div>
    </div>
  )
}

export default ToDoCategory;