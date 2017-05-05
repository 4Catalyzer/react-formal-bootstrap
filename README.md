react-formal-bootstrap
===

A `react-bootstrap` form input adapter for react-formal

```js
import Form from 'react-formal'
import types from 'react-formal-bootstrap';

Form.addInputTypes(types);
```

You can also use each input individually outside of the react-formal context by importing the
input from `react-formal-bootstrap/lib`, to take advantage of the value parsing logic not present in native inputs.


## Example

```js
import React from 'react';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Form from 'react-formal';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string(),
  age: yup.number(),
  favoriteColor: yup.array(
    yup.string()
  )
})

function MyForm() {
  return (
    <Form schema={schema}>
      <FormGroup for="name" controlId="field--name">
        <ControlLabel>Name</ControlLabel>
        <div>
          <Form.Field name="name" />
          <Form.Message for="name" />
        </div>
      </FormGroup>
      <FormGroup for="age" controlId="field--age">
        <ControlLabel>Age</ControlLabel>
        <div>
          <Form.Field name="age" />
          <Form.Message for="age" />
        </div>
      </FormGroup>
      <FormGroup for="favoriteColor" controlId="field--age">
        <ControlLabel>Favorite color</ControlLabel>
        <div>
          <Form.Field name="favoriteColor">
            <option value={null}> </option>
            <option value="red">Red</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
          </Form.Field>
          <Form.Message for="favoriteColor" />
        </div>
      </FormGroup>
    </Form>   
  )
}
```
