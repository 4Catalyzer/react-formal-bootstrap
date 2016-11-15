import React from 'react';
import Date from 'react-formal/lib/inputs/Date';

import FormInput from './FormInput';

export default function DateInput(props) {
  return (
    <Date
      {...props}
      tagName={FormInput}
    />
  );
}
