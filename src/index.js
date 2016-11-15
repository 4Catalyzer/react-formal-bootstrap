import BooleanInput from './BooleanInput';
import DateInput from './DateInput';
import FileInput from './FileInput';
import NumberInput from './NumberInput';
import SelectInput from './SelectInput';
import TextareaInput from './TextareaInput';
import TextInput from './TextInput';

const types = Object.create(null);

types.file = FileInput;

types.string = TextInput;
types.email = TextInput;
types.password = TextInput;

types.date = DateInput;
types['datetime-local'] = DateInput;

types.number = NumberInput;
types.textarea = TextareaInput;
types.select = SelectInput;

types.boolean = BooleanInput;

module.exports = types;
