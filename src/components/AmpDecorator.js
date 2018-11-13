import * as React from 'react'

import Layout from './Layout'

const AmpDecorator = storyFn => (
  <div>
    <Layout />
    { storyFn() }
  </div>
)

export default AmpDecorator
