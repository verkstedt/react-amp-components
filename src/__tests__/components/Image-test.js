import React from 'react'

import Image from '../../components/Image'
import { renderComponent } from '../test-utils'

describe('Image', () => {
  it('matches the snapshot', () => {
    const image = renderComponent(<Image src="https://placekitten.com/200/300" />)
    expect(image.toJSON()).toMatchSnapshot()
  })

  it('passes down the right props', () => {
    const props = {
      src: 'https://placekitten.com/200/300',
      srcset: '/img/amp.jpg 1080w, /img/amp-900.jpg 900w',
      alt: 'just an alt',
      layout: 'responsive',
      width: '100',
      height: '100',
      class: 'such-a-class'
    }
    const image = renderComponent(<Image {...props} />)
    expect(image.toJSON().props).toMatchObject(props)
  })

  it('renders only the right props', () => {
    const validProps = {
      src: 'https://placekitten.com/200/300',
      srcset: '/img/amp.jpg 1080w, /img/amp-900.jpg 900w',
      alt: 'just an alt',
      layout: 'responsive',
      width: '100',
      height: '100',
      class: 'such-a-class'
    }
    const invalidProps = {
      randomStuff: 'aiosdo',
      otherStuff: 123
    }
    const image = renderComponent(
      <Image {...{ ...validProps, ...invalidProps }} />
    )
    expect(image.toJSON().props).toMatchObject(validProps)

    Object.keys(invalidProps).forEach(prop =>
      expect(image.toJSON().props).not.toHaveProperty(prop)
    )
  })
})

