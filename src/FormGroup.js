import React from 'react';
import BaseForm from 'react-formal';
import BaseFormGroup from 'react-bootstrap/lib/FormGroup';

const propTypes = {
  className: React.PropTypes.string,
  for: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.arrayOf(
      React.PropTypes.string,
    ),
  ]),
};

function FormGroup({ for: forFields, ...props }) {
  if (!forFields || !forFields.length) {
    return <BaseFormGroup {...props} />;
  }

  return (
    <BaseForm.Trigger for={forFields} events={null}>
      {({ messages, ...triggerProps }) =>
        <BaseFormGroup
          {...props}
          {...triggerProps}
          validationState={Object.keys(messages).length
            ? 'error' : null
          }
        />
      }
    </BaseForm.Trigger>
  );
}

FormGroup.propTypes = propTypes;

export default FormGroup;
