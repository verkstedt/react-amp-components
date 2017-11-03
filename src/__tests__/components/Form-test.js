import React from 'react'
import Form from '../../components/Form'
import Helmet from '../../utils/Helmet'
import { renderComponent } from '../test-utils'

describe('Form', () => {
  it('matches the snapshot', () => {
    const form = renderComponent(
      <Form method="GET" action="https://example.com">
        <input name="query" placeholder="search" />
        <input type="submit" value="Search" />
      </Form>
    )
    expect(form.toJSON()).toMatchSnapshot()
  })

  it('injects the right script tag', () => {
    renderComponent(
      <Form method="GET" action="https://example.com">
        <input name="query" placeholder="search" />
        <input type="submit" value="Search" />
      </Form>
    )
    Helmet.canUseDOM = false
    const staticHead = Helmet.renderStatic()
    expect(staticHead.scriptTags).toMatchSnapshot()
  })

  it('passes down the right props', () => {
    const props = {
      method: 'POST',
      action: 'https://example.com'
    }
    const form = renderComponent(
      <Form {...props}>
        <input name="query" placeholder="search" />
        <input type="submit" value="Search" />
      </Form>
    )
    expect(form.toJSON().props).toMatchObject(props)
  })
})
