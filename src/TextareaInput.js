import React from 'react';
import Input from 'react-formal/lib/inputs/Input';

import FormInput from './FormInput';

export default function TextareaInput(props) {
  return (
    <Input
      {...props}
      tagName={FormInput}
      componentClass="textarea"
    />
  );
}
