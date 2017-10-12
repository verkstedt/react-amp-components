import React from 'react'
import Carousel from '../../components/Carousel'
import Helmet from '../../utils/Helmet'
import { renderComponent } from '../test-utils'

describe('Carousel', () => {
  it('matches the snapshot', () => {
    const carousel = renderComponent(
      <Carousel height="250" width="250" type="carousel">
        <p>Carousel contents</p>
      </Carousel>
    )
    expect(carousel.toJSON()).toMatchSnapshot()
  })

  it('injects the right script tag', () => {
    renderComponent(
      <Carousel height="250" width="250" type="carousel">
        <p>Carousel contents</p>
      </Carousel>
    )
    Helmet.canUseDOM = false
    const staticHead = Helmet.renderStatic()
    expect(staticHead.scriptTags).toMatchSnapshot()
  })

  it('passes down the right props', () => {
    const props = {
      height: '100',
      width: '100',
      type: 'carousel'
    }
    const carousel = renderComponent(
      <Carousel {...props}><p>content</p></Carousel>
    )
    expect(carousel.toJSON().props).toMatchObject(props)
  })
})
