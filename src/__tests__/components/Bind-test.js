import React from 'react'
import Bind from '../../components/Bind'
import Helmet from '../../utils/Helmet'
import { renderComponent } from '../test-utils'

describe('Bind', () => {
  it('works', () => {
    const res = renderComponent(
      <Bind text="'bind ' + foo">
        <div>test</div>
      </Bind>
    )
    expect(res.toJSON()).toMatchSnapshot()
  })

  it('works with multiple children', () => {
    const res = renderComponent(
      <Bind text="'bind ' + foo">
        <div>test</div>
        <p>another test</p>
      </Bind>
    )
    expect(res.toJSON()).toMatchSnapshot()
  })

  it('works with props with brackets', () => {
    const props = { '[text]': 'foo' }
    const res = renderComponent(
      <Bind {...props} >
        <p>test</p>
      </Bind>
    )
    expect(res.toJSON()).toMatchSnapshot()
  })

  it('works with child with children', () => {
    const res = renderComponent(
      <Bind className="'bind ' + foo">
        <div id="id" className="class">
          <p>One</p>
          <p>Another</p>
        </div>
      </Bind>
    )
    expect(res.toJSON()).toMatchSnapshot()
  })

  it('injects the right script tag', () => {
    renderComponent(
      <Bind>
        <p>Just test the script.</p>
      </Bind>
    )
    Helmet.canUseDOM = false
    const staticHead = Helmet.renderStatic()
    expect(staticHead.scriptTags).toMatchSnapshot()
  })

  it('passes down the right props', () => {
    const props = {
      '[text]': "'test ' + foo"
    }
    const bind = renderComponent(
      <Bind text="'test ' + foo">
        <p>bind me.</p>
      </Bind>
    )
    expect(bind.toJSON().props).toMatchObject(props)
  })
})

