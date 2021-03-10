import React, {Component} from 'react';
import {ToDoCategory} from '../ToDoCategory';

/* BORRAR TEST CATEOGRY! */



const testCategory = {
  name: 'categoria de prueba',
  toDos: [
    {
      id: 1,
      name: 'primerToDo',
      desc: 'es el primer todo',
      done: false,
    },
    {
      id: 2,
      name: 'seg',
      desc: 'es el seg todo',
      done: true,
    }
  ]
}

class ToDoApp extends Component{
  constructor(props){
    super(props)
    this.state = {
      currentCategory: 'testCategory',
      categoryOrder: ['testCategory'],
      categories: {
        testCategory,
      }
    }

    this.toggleDone = this.toggleDone.bind(this);
    this.saveToDoToCurrentCategory = this.saveToDoToCurrentCategory.bind(this);
  }

  render(){
    let {categories, currentCategory} = this.state

    return(
      <ToDoCategory 
        category={categories[currentCategory]} 
        toggleDone={this.toggleDone} 
        saveToDoToCurrentCategory={this.saveToDoToCurrentCategory}
      />
    )
  }

  toggleDone(id){
    /* achicar esto!! */
    let {categories, currentCategory} = this.state

    if(categories[currentCategory] === undefined){
      throw new Error('Categoria invalida.')
    }
    let oldToDos = categories[currentCategory].toDos;
    let newToDos = oldToDos.map(toDo => 
      (toDo.id === id) ? {...toDo, done: !toDo.done} : toDo
    )
    let updatedCategories = {
      ...categories,
      [currentCategory]: {
        ...categories[currentCategory],
        toDos: newToDos,
      }
    }

    this.setState({
      categories: updatedCategories}
    );
  }

  saveToDoToCurrentCategory(toDo){
    /* agregar validacion... */
    
    let {categories, currentCategory} = this.state;
    let updatedToDos = categories[currentCategory].toDos.concat([toDo]);
    let updatedCategories = {...categories, [currentCategory]: {
      ...categories[currentCategory],
      toDos: updatedToDos
    }}

    this.setState({
      categories: updatedCategories}
    );
  }
}

export default ToDoApp;
