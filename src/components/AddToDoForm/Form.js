import React from 'react';

let Form = function(props) {
  const {inputList, formName, handleChange, handleSubmit} = props;
  return(
      <form className={'form-' + formName} onSubmit={handleSubmit}>
        {inputList.map(input =>
          <input 
            key={input}
            type='text'
            autoComplete='off'
            onChange={e =>  handleChange('name', e.target.value)}
          />
        )}
        <input type='submit' className={'submit-btn' + ' ' + formName + '-submit-btn'}></input>
      </form>
  )
}

export default Form;