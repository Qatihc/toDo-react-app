import React from 'react';

import {AddCategoryForm} from '../Form'

import generateId from '../../helpers/generateId';
import Category from '../../models/Category'
import './style.scss'

function CategoryList(props){
  const {categories, changeToCategory, addCategories} = props
  return(
    <div className='category-list-wrap'>
      <h1>categorias</h1>
      <ul className='category-list'>
        {props.categories.map(category => {
          let categoryNumber = categories.indexOf(category);
          if (categoryNumber == -1) categoryNumber = 0;
          return (
            <li key={category.id} 
              onClick={() => changeToCategory(categoryNumber)}>
              {category.name}
            </li>
          )
        })}
      </ul>
      <AddCategoryForm addCategories={addCategories} makeCategory={makeCategory}/>
    </div>
  )

  function makeCategory(category){
    const id = generateId();
    return new Category({...category, id})
  }

}

export default CategoryList;