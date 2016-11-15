import React from 'react';

import FormInput from './FormInput';

export default class SelectInput extends React.Component {
  static propTypes = {
    onChange: React.PropTypes.func.isRequired,
  };

  onChange = (event) => {
    this.props.onChange(event.target.value);
  };

  render() {
    return (
      <FormInput
        {...this.props}
        componentClass="select"
        onChange={this.onChange}
      />
    );
  }
}
