/* eslint-disable no-template-curly-in-string */
import React from 'react'
import Analytics from '../../components/Analytics'
import Helmet from '../../utils/Helmet'
import { renderComponent } from '../test-utils'

const requests = {
  base: 'https://example.com/analytics?a=${account}&u=${canonicalUrl}&t=${title}',
  pageview: '${base}&type=pageview',
  event: '${base}&type=event&eventId=${eventId}'
}
const vars = {
  account: 'ABC123',
  countryCode: 'tr',
  tags: ['Swift,Jonathan', "Gulliver's Travels"]
}

const extraUrlParams = {
  a: '1',
  b: '2',
  c: '3'
}

const triggers = {
  sampledOnRandom: {
    on: 'visible',
    request: 'request',
    sampleSpec: {
      sampleOn: '${random}',
      threshold: 50
    }
  },
  sampledOnClientId: {
    on: 'visible',
    request: 'request',
    sampleSpec: {
      sampleOn: '${clientId(cookieName)}',
      threshold: 1
    }
  }
}

const transport = {
  beacon: false,
  xhrpost: false,
  image: true
}

describe('Analytics', () => {
  it('matches the snapshot', () => {
    const analytics = renderComponent(
      <Analytics {...{
        requests,
        vars,
        extraUrlParams,
        triggers,
        transport
      }}
      />
    )
    expect(analytics.toJSON()).toMatchSnapshot()
  })

  it('injects the right script tag', () => {
    renderComponent(
      <Analytics {...{
        requests,
        vars,
        extraUrlParams,
        triggers,
        transport
      }}
      />
    )
    Helmet.canUseDOM = false
    const staticHead = Helmet.renderStatic()
    expect(staticHead.scriptTags).toMatchSnapshot()
  })
})
