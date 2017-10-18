import React from 'react'
import Analytics from '../../components/Analytics'
import Helmet from '../../utils/Helmet'
import { renderComponent } from '../test-utils'

describe('Analytics', () => {
  it('matches the snapshot', () => {
    const requests = {
      pageview: 'https://example.com'
    }
    const analytics = renderComponent(
      <Analytics requests={requests} />
    )
    expect(analytics.toJSON()).toMatchSnapshot()
  })

  it('injects the right script tag', () => {
    const requests = {
      pageview: 'https://example.com'
    }
    renderComponent(
      <Analytics requests={requests} />
    )
    Helmet.canUseDOM = false
    const staticHead = Helmet.renderStatic()
    expect(staticHead.scriptTags).toMatchSnapshot()
  })
})
