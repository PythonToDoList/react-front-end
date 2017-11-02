import React from 'react';


const InputField = ({ name, type, className, value, required, placeholder }) =>
    <input name={ name } type={ type } className={ className } required={ required } value={ value } placeholder={ placeholder } />

InputField.defaultProps = {
  className: '',
  required: true,
  placeholder: '',
  name: ''
}

const TextArea = ({ name, className, children, required, placeholder }) =>
    <textarea name={ name } className={ className } required={ required } placeholder={ placeholder }>{ children }</textarea>

TextArea.defaultProps = {
    required: false
}

export default InputField;
export {
    TextArea,
};
