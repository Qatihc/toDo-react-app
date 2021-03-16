import React, {Component} from 'react';
import Form from './Form';

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
      <Form inputList={[{name: 'name', value: this.state.name}, ]}
        formName='add-to-do'
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}

      >
      </Form>
    )
  }

  handleChange(propName, value){
    this.setState({[propName]: value})
  }

  handleSubmit(e){
    e.preventDefault();
    const {makeToDo, renderNewToDo} = this.props;
    const {name} = this.state;

    this.handleChange('name', '')
    if(name.match(/^\s*$/)) return;
    
    const toDo = makeToDo({name})
    renderNewToDo(toDo);
  }

}

export default AddToDoForm;