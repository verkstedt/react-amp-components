import * as React from 'react'
import { storiesOf } from '@storybook/react'

import Image from '../src/components/Image'

storiesOf('Image', module)
  // .addDecorator(AmpDecorator)
  .add('Image default', () => (
    <Image
      src="/img/amp.jpg"
      width={1280}
      height={853}
    />
  ))
  .add('svg', () => (
    <Image
      src="/img/logo-blue.svg"
      width={1280}
      height={853}
    />
  ))
