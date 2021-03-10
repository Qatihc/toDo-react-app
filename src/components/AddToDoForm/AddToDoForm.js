import React, {Component} from 'react';
import ToDo from '../../models/ToDo';
import generateId from '../../helpers/generateId';

class AddToDoForm extends Component{
  constructor(props){
    super(props)

    this.state = {
      name: '',
      desc: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" value={this.props.nameValue} 
          onChange={(e) => this.handleChange('name', e.target.value)}>
        </input>
        <input type="text" name="desc" value={this.props.descValue}
          onChange={(e) => this.handleChange('desc', e.target.value)}>
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
    const {saveToDoToCurrentCategory} = this.props,
      {name, desc} = this.state,
      id = generateId();

    const toDo = new ToDo({name, desc, id})
    saveToDoToCurrentCategory(toDo);

  }

}

export default AddToDoForm;