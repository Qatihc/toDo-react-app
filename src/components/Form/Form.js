import React from 'react';

let Form = function(props) {
  const {inputList, formName, handleChange, handleSubmit} = props;
  return(
      <form className={'form-' + formName} onSubmit={handleSubmit}>
        {inputList.map(input =>
          <input 
            key={input.name}
            type='text'
            autoComplete='off'
            onChange={e =>  handleChange(input.name, e.target.value)}
            value={input.value}
          />
        )}
        <input type='submit' className={'submit-btn' + ' ' + formName + '-submit-btn'}></input>
      </form>
  )
}

export default Form;