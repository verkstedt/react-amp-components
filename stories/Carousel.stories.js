import * as React from 'react'
import { storiesOf } from '@storybook/react'

import Image from '../src/components/Image'
import Carousel from '../src/components/Carousel'

storiesOf('Carousel', module)
  // .addDecorator(AmpDecorator)
  .add('Carousel default', () => (
    <Carousel width="450" height="300">
      <Image
        src="/img/kitten-1.jpg"
        width={450}
        height={300}
      />
      <Image
        src="/img/kitten-2.jpg"
        width={450}
        height={300}
      />
      <Image
        src="/img/kitten-3.jpg"
        width={450}
        height={300}
      />
    </Carousel>
  ))
