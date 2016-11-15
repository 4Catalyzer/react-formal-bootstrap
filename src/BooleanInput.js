import React from 'react';
import Bool from 'react-formal/lib/inputs/Bool';

import FormInput from './FormInput';

export default function BooleanInput(props) {
  return (
    <Bool
      {...props}
      tagName={FormInput}
    />
  );
}
