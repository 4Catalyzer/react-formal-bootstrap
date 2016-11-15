import classNames from 'classnames';
import React from 'react';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import FormControl from 'react-bootstrap/lib/FormControl';
import Radio from 'react-bootstrap/lib/Radio';

const propTypes = {
  onChange: React.PropTypes.func,
  className: React.PropTypes.string,
  type: React.PropTypes.string,
  bsSize: React.PropTypes.oneOf(['large', 'lg', 'small', 'sm']),

  /* shhhh */
  placeholder: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object,
  ]),
};

const contextTypes = {
  intl: React.PropTypes.shape({
    formatMessage: React.PropTypes.func.isRequired,
  }),
};

function FormInput({ className, bsSize, placeholder, ...props }, { intl }) {
  // secret react-intl support for placeholder
  if (placeholder && typeof placeholder === 'object' && intl) {
    placeholder = intl.formatMessage(placeholder, placeholder.values);
  }

  if (props.type === 'radio') {
    return <Radio {...props} />;
  } else if (props.type === 'boolean' || props.type === 'checkbox') {
    return <Checkbox {...props} />;
  }

  return (
    <FormControl
      {...props}
      placeholder={placeholder}
      className={classNames(
        className,
        /* FIXME: when upstream RB supports input sizes */
        (bsSize === 'large' || bsSize === 'lg') && 'input-lg',
        (bsSize === 'small' || bsSize === 'sm') && 'input-sm',
      )}
    />
  );
}

FormInput.propTypes = propTypes;
FormInput.contextTypes = contextTypes;

export default FormInput;
