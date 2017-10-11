import React from 'react'
import Image from '../../components/Image'
import { render } from '../test-utils'

let image

describe('Image', () => {
  beforeEach(() => {
    image = render(
      <Image src="https://placekitten.com/200/300" />
    )
  })

  it('matches the snapshot', () => {
    expect(image).toMatchSnapshot()
  })
})

