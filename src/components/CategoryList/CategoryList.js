import React from 'react';

import './style.scss'

function CategoryList(props){
  const {categories, changeCategory} = props
  return(
    <div className='category-list-wrap'>
      <h1>categorias</h1>
      <ul className='category-list'>
        {props.categories.map(category => {
          let categoryNumber = categories.indexOf(category);
          if (categoryNumber == -1) categoryNumber = 0;
          return (
            <li key={category.id} 
              onClick={() => changeCategory(categoryNumber)}>
              {category.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CategoryList;