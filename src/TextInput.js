import React from 'react';
import Input from 'react-formal/lib/inputs/Input';

import FormInput from './FormInput';

const propTypes = {
  type: React.PropTypes.string,
};

function isTextType(type) {
  return (
    type === 'email' ||
    type === 'password' ||
    type === 'tel' ||
    type === 'text'
  );
}

function TextInput(props) {
  const type = isTextType(props.type) ? props.type : 'text';
  return (
    <Input
      {...props}
      type={type}
      tagName={FormInput}
    />
  );
}

TextInput.propTypes = propTypes;

export default TextInput;
