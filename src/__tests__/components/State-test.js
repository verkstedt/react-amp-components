import React from 'react'
import State from '../../components/State'
import Helmet from '../../utils/Helmet'
import { renderComponent } from '../test-utils'

describe('State', () => {
  it('works', () => {
    const res = renderComponent(
      <State id="animals">
        {{
          lion: 'mammal'
        }}
      </State>
    )
    expect(res.toJSON()).toMatchSnapshot()
  })

  it('injects the right script tag', () => {
    renderComponent(
      <State>
        {{}}
      </State>
    )
    Helmet.canUseDOM = false
    const staticHead = Helmet.renderStatic()
    expect(staticHead.scriptTags).toMatchSnapshot()
  })
})

