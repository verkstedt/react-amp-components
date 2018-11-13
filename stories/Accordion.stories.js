import * as React from 'react'
import { storiesOf } from '@storybook/react'

import Accordion from '../src/components/Accordion'

storiesOf('Accordion', module)
  // .addDecorator(AmpDecorator)
  .add('Accordion default', () => (
    <Accordion>
      <section>
        <h2>Section 1</h2>
        <p>Content in section 1.</p>
      </section>
      <section>
        <h2>Section 2</h2>
        <div>Content in section 2.</div>
      </section>
      <section expanded="true">
        <h2>Section 3</h2>
        <div>Content in section 3.</div>
      </section>
    </Accordion>
  ))
