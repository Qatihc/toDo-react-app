import React, {Component} from 'react';
import ToDo from '../../models/ToDo';
import generateId from '../../helpers/generateId';

import './style.scss'

class AddToDoForm extends Component{
  constructor(props){
    super(props)

    this.state = {
      name: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} className="form-add-to-do" >
        <input type="text" name="name" value={this.state.name} 
          onChange={(e) => this.handleChange('name', e.target.value)}
          autoComplete="off"
        >
        </input>
        <button type="submit" value="Crear"></button>
      </form>
    )
  }

  handleChange(propName, value){
    this.setState({[propName]: value})
  }

  handleSubmit(event){
    event.preventDefault();
    const {saveToDo} = this.props,
      {name} = this.state,
      id = generateId();

    this.handleChange('name', '')
    if(!name || name.match(/^\s*$/)) return;
    const toDo = new ToDo({name, id})
    saveToDo(toDo);
  }

}

export default AddToDoForm;