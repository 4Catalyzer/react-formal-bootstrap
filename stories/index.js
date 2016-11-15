import React from 'react';
import { storiesOf } from '@kadira/storybook';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

import types from '../src';
import isNativeType from './isNativeType';


storiesOf('react-formal inputs', module)
  .add('Inputs', () => (
    <div style={{ width: 250, margin: '20px auto' }}>
      {Object.entries(types).map(([type, Component]) => (
        <FormGroup>
          <ControlLabel>{type}</ControlLabel>
          <Component
            type={isNativeType(type) ? type : undefined}
            onChange={() => {}}
          />
        </FormGroup>
      ))}
    </div>
  ));
