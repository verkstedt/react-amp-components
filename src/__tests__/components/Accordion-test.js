import React from 'react'
import Accordion from '../../components/Accordion'
import Helmet from '../../utils/Helmet'
import { renderComponent } from '../test-utils'

describe('Accordion', () => {
  it('matches the snapshot', () => {
    const accordion = renderComponent(
      <Accordion>
        <section>
          <h2>Section 1</h2>
          <p>Content in section 1.</p>
        </section>
        <section expanded="">
          <h2>Section 2</h2>
          <div>Content in section 2.</div>
        </section>
      </Accordion>
    )
    expect(accordion.toJSON()).toMatchSnapshot()
  })

  it('injects the right script tag', () => {
    renderComponent(
      <Accordion>
        <section>
          <h2>Section 1</h2>
          <p>Content in section 1.</p>
        </section>
        <section expanded="">
          <h2>Section 2</h2>
          <div>Content in section 2.</div>
        </section>
      </Accordion>
    )
    Helmet.canUseDOM = false
    const staticHead = Helmet.renderStatic()
    expect(staticHead.scriptTags).toMatchSnapshot()
  })

  it('passes down the right props', () => {
    const props = {
      expanded: true,
      disableSessionStates: true
    }
    const accordion = renderComponent(
      <Accordion {...props}>
        <section>
          <h2>Section 1</h2>
          <p>Content in section 1.</p>
        </section>
        <section expanded="">
          <h2>Section 2</h2>
          <div>Content in section 2.</div>
        </section>
      </Accordion>
    )
    expect(accordion.toJSON().props).toMatchObject(props)
  })
})

