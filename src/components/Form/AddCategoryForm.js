import React, {Component} from 'react';
import Form from './Form';

import './style.scss'

class AddCategoryForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render(){
    return(
      <Form inputList={[{name: 'name', value: this.state.name}]}
        formName='add-category'
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      >
      </Form>
    )
  }

  handleSubmit(e){
    e.preventDefault();
    const {makeCategory, addCategories} = this.props;
    const {name} = this.state;

    this.handleChange('name', '')
    if(name.match(/^\s*$/)) return;
    
    const category = makeCategory({name})
    addCategories([category]);
  }

  handleChange(propName, value){
    this.setState({[propName]: value})
  }

}

export default AddCategoryForm;