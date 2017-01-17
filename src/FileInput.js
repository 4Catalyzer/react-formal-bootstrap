import React from 'react';
import File from 'react-formal/lib/inputs/File';

import FormInput from './FormInput';

function FileInput(props) {
  return (
    <File
      {...props}
      tagName={FormInput}
    />
  );
}

export default FileInput;
