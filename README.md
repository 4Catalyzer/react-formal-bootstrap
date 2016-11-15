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
