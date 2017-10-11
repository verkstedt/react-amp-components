import React from 'react'
import Sidebar from '../../components/Sidebar'
import Helmet from '../../utils/Helmet'
import { render } from '../test-utils'

let sidebar

describe('Sidebar', () => {
  beforeEach(() => {
    sidebar = render(
      <Sidebar id="sid" layout="hidden" side="left">
        <p>sidebar contents</p>
      </Sidebar>
    )
  })

  it('matches the snapshot', () => {
    expect(sidebar).toMatchSnapshot()
  })

  it('injects the right script tag', () => {
    Helmet.canUseDOM = false
    const staticHead = Helmet.renderStatic()
    expect(staticHead.scriptTags).toMatchSnapshot()
  })
})
