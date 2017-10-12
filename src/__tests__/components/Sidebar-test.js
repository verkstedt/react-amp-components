import React from 'react'
import Sidebar from '../../components/Sidebar'
import Helmet from '../../utils/Helmet'
import { renderComponent } from '../test-utils'

describe('Sidebar', () => {
  it('matches the snapshot', () => {
    const sidebar = renderComponent(
      <Sidebar id="sid" layout="hidden" side="left">
        <p>sidebar contents</p>
      </Sidebar>
    )
    expect(sidebar.toJSON()).toMatchSnapshot()
  })

  it('injects the right script tag', () => {
    renderComponent(
      <Sidebar id="sid" layout="hidden" side="left">
        <p>sidebar contents</p>
      </Sidebar>
    )
    Helmet.canUseDOM = false
    const staticHead = Helmet.renderStatic()
    expect(staticHead.scriptTags).toMatchSnapshot()
  })

  it('passes down the right props', () => {
    const props = {
      id: 'my-sidebar',
      side: 'right'
    }
    const sidebar = renderComponent(
      <Sidebar {...props} ><p>content</p></Sidebar>
    )
    expect(sidebar.toJSON().props).toMatchObject(props)
  })
})
