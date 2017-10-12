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

  it('renders only the right props', () => {
    const validProps = {
      src: 'https://placekitten.com/200/300',
      srcset: '/img/amp.jpg 1080w, /img/amp-900.jpg 900w',
      alt: 'just an alt',
      layout: 'awesome layout',
      width: 100,
      height: 100,
      className: 'such-a-class',
    }
    const invalidProps = {
      randomStuff: 'aiosdo',
      otherStuff: 123
    }
    const image = renderToStaticMarkup(
      <Image {...{ ...validProps, ...invalidProps } } />
    )
    expect(image).toMatchSnapshot(validProps)

    for (const prop in validProps) {
      expect(image).toMatch(new RegExp(`${validProps[prop]}`))
    }

    for (const prop in invalidProps) {
      expect(image).not.toMatch(new RegExp(`${invalidProps[prop]}`))
    }
  })
})

