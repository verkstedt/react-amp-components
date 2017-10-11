import React from 'react'

import Image from '../../components/Image'
import { render, renderToStaticMarkup } from '../test-utils'

describe('Image', () => {

  it('matches the snapshot', () => {
    const image = render(
      <Image src="https://placekitten.com/200/300" />
    )
    expect(image.toJSON()).toMatchSnapshot()
  })

  it('passes down the right props', () => {
    const props = {
      src: 'https://placekitten.com/200/300',
      srcset: '/img/amp.jpg 1080w, /img/amp-900.jpg 900w',
      alt: 'just an alt',
      layout: 'awesome layout',
      width: 100,
      height: 100,
      className: 'such-a-class'
    }
    const image = render(
      <Image { ...props } />
    )
    expect(image.toJSON().props).toMatchObject(props)
  })

  it('renders all the right props', () => {
    const props = {
      src: 'https://placekitten.com/200/300',
      srcset: '/img/amp.jpg 1080w, /img/amp-900.jpg 900w',
      alt: 'just an alt',
      layout: 'awesome layout',
      width: 100,
      height: 100,
      className: 'such-a-class',
      houhou: 'jhoh',
      randomStuff: 'aiosdo'
    }
    const image = renderToStaticMarkup(
      <Image { ...props } />
    )
    expect(image).toMatchSnapshot(props)
  })
})

