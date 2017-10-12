import React, { Component } from 'react'
import { string, oneOfType, arrayOf, node, bool, oneOf } from 'prop-types'
import { Helmet } from 'react-helmet'

import pick from '../utils/pick'
import commonPropTypes from './commonPropTypes'

class Carousel extends Component {
  static propTypes = {
    ...commonPropTypes,
    type: oneOf(['carousel', 'slides']).isRequired,
    autoplay: bool,
    delay: string,
    children: oneOfType([
      arrayOf(node),
      node
    ])
  }

  static defaultProps = {
    autoplay: null,
    children: [],
    delay: null
  }

  get properties() {
    return pick(this.props, ...[
      ...Object.keys(commonPropTypes),
      'type',
      'autoplay',
      'delay'
    ])
  }

  render() {
    const { children } = this.props
    return [
      <Helmet key="helmet">
        <script async="" custom-element="amp-carousel" src="https://cdn.ampproject.org/v0/amp-carousel-0.1.js" />
      </Helmet>,
      <amp-carousel {...{ ...this.properties }} key="carousel">
        {children}
      </amp-carousel>
    ]
  }
}

export default Carousel
