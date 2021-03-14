import React, {Component} from 'react';
import {ToDoCategory} from '../ToDoCategory';

import './style.scss'
/* BORRAR TEST CATEOGRY! */



const testCategory = {
  name: 'categoria de prueba',
  toDos: [
    {
      id: 1,
      name: 'primerToDo',
      done: false,
    },
    {
      id: 2,
      name: 'seg',
      done: true,
    }
  ]
}

const pepCategory = {
  name: 'segundo test',
  toDos: [
    {
      id: 3,
      name: 'segrToDo',
      done: false,
    },
    {
      id: 4,
      name: 'tercer',
      done: true,
    }
  ]
}

const tercera = {
  name: 'tercera cat',
  toDos: []
}


class ToDoApp extends Component{
  constructor(props){
    super(props)
    this.state = {
      currentCategory: 0,
      categories: [
        testCategory,
        pepCategory,
        tercera,
      ],
    }

    this.toggleDone = this.toggleDone.bind(this);
    this.saveToDo = this.saveToDo.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
    this.nextCategory = this.nextCategory.bind(this);
    this.previousCategory = this.previousCategory.bind(this);
  }

  render(){
    let {categories, currentCategory} = this.state

    return(
      <div className="category-wrap">
        <ToDoCategory
          category={categories[currentCategory]} 
          toggleDone={this.toggleDone} 
          saveToDo={this.saveToDo}
          nextCategory={this.nextCategory}
          previousCategory={this.previousCategory}
        />
      </div>
    )
  }

  updateCurrentCategory(updatedCategory){
    const {name, toDos} = updatedCategory,
      {categories, currentCategory} = this.state;

    let updatedCategories = categories.map((category, i) => {
      if(i == currentCategory) {
        category.name = name || category.name
        category.toDos = toDos || category.toDos;
      }
      return category;
    })

    this.setState({
      categories: updatedCategories}
    );
  }

  toggleDone(id){

    let {categories, currentCategory} = this.state
    let toDos = categories[currentCategory].toDos;

    let updatedToDos = toDos.map(toDo => 
      (toDo.id === id) ? {...toDo, done: !toDo.done} : toDo
    )
    this.updateCurrentCategory({toDos: updatedToDos})

  }

  saveToDo(toDo){
    /* agregar validacion... */
    
    let {categories, currentCategory} = this.state;
    let updatedToDos = categories[currentCategory].toDos.concat([toDo]);
    
    this.updateCurrentCategory({toDos: updatedToDos})
  }

  changeCategory(to){
    this.setState({currentCategory: to});
  }

  nextCategory(){
    const {currentCategory} = this.state;
    const nextCategory = 
      (currentCategory + 1 == this.state.categories.length) ? 0 : currentCategory + 1;
    this.changeCategory(nextCategory);
  }

  previousCategory(){
    const {currentCategory} = this.state;
    const previousCategory =
      (currentCategory == 0) ? this.state.categories.length - 1 : currentCategory - 1;
    this.changeCategory(previousCategory)
  }

}

export default ToDoApp;
