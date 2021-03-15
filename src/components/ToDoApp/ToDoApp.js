import React, {Component} from 'react';
import {HeaderContainer} from '../Header';
import {CategoryList} from '../CategoryList'
import {ToDoCategory} from '../ToDoCategory';


import './style.scss'
/* BORRAR TEST CATEOGRY! */

import ToDo from '../../models/ToDo'

const testCategory = {
  name: 'categoria de prueba',
  id: 1,
  toDos: [
    new ToDo({name: 'primero', id: 1}),
    new ToDo({name: 'seg', id: 2}),
    new ToDo({name: 'quin', id: 3}),
  ]
}

const pepCategory = {
  name: 'segundo test',
  id: 2,
  toDos: [
    new ToDo({name: 'terc', id: 6}),
    new ToDo({name: 'cu', id: 7}),
  ]
}

const tercera = {
  name: 'tercera cat',
  id: 3,
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
      <div className="main-wrap">
        <HeaderContainer />
        <CategoryList 
          categories={categories}
          changeCategory={this.changeCategory}
        />
        <ToDoCategory
          category={categories[currentCategory]} 
          toggleDone={this.toggleDone} 
          saveToDo={this.saveToDo}
        />
      </div>
    )
  }

  modifyCurrentCategory(updatedCategory){
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
    this.modifyCurrentCategory({toDos: updatedToDos})

  }

  saveToDo(toDo){
    /* agregar validacion... */
    
    let {categories, currentCategory} = this.state;
    let updatedToDos = categories[currentCategory].toDos.concat([toDo]);
    
    this.modifyCurrentCategory({toDos: updatedToDos})
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
