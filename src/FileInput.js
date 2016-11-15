import React from 'react';

import FormInput from './FormInput';

const propTypes = {
  multiple: React.PropTypes.bool,
  onChange: React.PropTypes.func,
};

class FileInput extends React.Component {
  onChange = ({ target: { files } }) => {
    const { multiple, onChange } = this.props;
    if (onChange) {
      onChange(multiple ? files : files[0]);
    }
  };

  render() {
    const props = { ...this.props };
    delete props.value;

    return (
      <FormInput
        {...this.props}
        onChange={this.onChange}
      />
    );
  }
}

FileInput.propTypes = propTypes;

export default FileInput;
