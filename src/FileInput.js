import React from 'react';

import File from 'react-formal/lib/inputs/File';

import FormInput from './FormInput';

const propTypes = {
  multiple: React.PropTypes.bool,
  onChange: React.PropTypes.func,
};

function FileInput(props) {
  return (
    <File
      {...props}
      tagName={FormInput}
    />
  );
}


FileInput.propTypes = propTypes;

export default FileInput;
