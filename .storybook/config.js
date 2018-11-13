import { configure, addDecorator } from '@storybook/react';

import AmpDecorator from '../src/components/AmpDecorator'

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(AmpDecorator);

configure(loadStories, module);
