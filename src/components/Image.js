import React, { Component } from 'react'
import { string, bool } from 'prop-types'

import { pick } from '../utils/misc'
import commonPropTypes from './commonPropTypes'

class Image extends Component {

  static propTypes = {
    ...commonPropTypes,
    src: string.isRequired,
    srcset: string,
    noscript: bool,
    alt: string
  }

  get fallback() {
    const { fallback } = this.props
    if (fallback) {
      return <div fallback="">{fallback}</div>
    } else {
      return null
    }
  }

  get noscript() {
    const { noscript, src, width, height, alt } = this.props
    if (noscript) {
      return (
        <noscript>
          <img {...{ src, width, height, alt } } />
        </noscript>
      )
    } else {
      return null
    }
  }

  get properties() {
    return pick(this.props, ...[
      ...Object.keys(commonPropTypes),
      'src',
      'srcset',
      'alt'
    ])
  }

  render() {

    return (
      <amp-img {...{ ...this.properties } }>
        {this.fallback}
        {this.noscript}
      </amp-img>
    )
  }
}

export default Image
