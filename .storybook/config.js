import { configure } from '@kadira/storybook';

import 'bootstrap/less/bootstrap.less';

function loadStories() {
  require('../stories'); // eslint-disable-line global-require
}

configure(loadStories, module);
