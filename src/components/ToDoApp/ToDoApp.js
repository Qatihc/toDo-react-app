import React, {Component} from 'react';
import {HeaderContainer} from '../Header';
import {CategoryList} from '../CategoryList'
import {ToDoCategory} from '../ToDoCategory';

import {testCategory, pepCategory, tercera} from '../../testData'

import './style.scss'
/* BORRAR TEST CATEOGRY! */

class ToDoApp extends Component{
  constructor(props){
    super(props)
    this.state = {
      currentCategory: 0,
      categories: [],
    }

    this.modifyCurrentCategory = this.modifyCurrentCategory.bind(this);
    this.previousCategory = this.previousCategory.bind(this);
    this.changeToCategory = this.changeToCategory.bind(this);
    this.addCategories = this.addCategories.bind(this);
    this.nextCategory = this.nextCategory.bind(this);

  }

  render(){
    let {categories, currentCategory} = this.state
    if(!categories.length) return <div></div>;
    return(
      <div className="main-wrap">
        <HeaderContainer />
        <CategoryList 
          categories={categories}
          changeToCategory={this.changeToCategory}
          addCategories={this.addCategories}
        />
        <ToDoCategory
          category={categories[currentCategory]} 
          modifyCurrentCategory={this.modifyCurrentCategory}
        />
      </div>
    )
  }

  componentDidMount(){
    let categories = this.fetchCategories();
    this.addCategories(categories)
  }

  fetchCategories(){
    /* MOCK FETCH */
    return([testCategory, pepCategory, tercera])
  }

  addCategories(categoriesToAdd){
    if(categoriesToAdd)
    this.setState({
      categories: [...this.state.categories, ...categoriesToAdd],
    });
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

  changeToCategory(n){
    this.setState({currentCategory: n});
  }

  nextCategory(){
    const {currentCategory} = this.state;
    const nextCategory = 
      (currentCategory + 1 == this.state.categories.length) ? 0 : currentCategory + 1;
    this.changeToCategory(nextCategory);
  }

  previousCategory(){
    const {currentCategory} = this.state;
    const previousCategory =
      (currentCategory == 0) ? this.state.categories.length - 1 : currentCategory - 1;
    this.changeToCategory(previousCategory)
  }

}

export default ToDoApp;
