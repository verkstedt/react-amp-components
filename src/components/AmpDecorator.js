import * as React from 'react'

import Layout from './Layout'

const AmpDecorator = (storyFn) => {
  // TODO: Ok so this is... disgusting. But works for now.
  // By reloading the location if AMP is defined,
  // we make HMR and storybook UI navigation work.
  // I think.
  // eslint-disable-next-line
  if (self.AMP) location.reload()

  return (
    <div>
      <Layout />
      { storyFn() }
    </div>
  )
}

export default AmpDecorator
