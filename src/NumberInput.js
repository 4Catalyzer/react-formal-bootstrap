import React from 'react';
import Number from 'react-formal/lib/inputs/Number';

import FormInput from './FormInput';

export default function NumberInput(props) {
  return (
    <Number
      {...props}
      tagName={FormInput}
    />
  );
}
