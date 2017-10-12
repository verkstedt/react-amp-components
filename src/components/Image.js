import React, { Component } from 'react'
import { string, bool } from 'prop-types'

import pick from '../utils/pick'
import commonPropTypes from './commonPropTypes'

class Image extends Component {
  static propTypes = {
    ...commonPropTypes,
    height: commonPropTypes.height.isRequired,
    width: commonPropTypes.width.isRequired,
    src: string.isRequired,
    srcset: string,
    noscript: bool,
    alt: string
  }

  static defaultProps = {
    srcset: null,
    noscript: null,
    alt: ''
  }

  get fallback() {
    const { fallback } = this.props
    if (fallback) {
      return <div fallback="">{fallback}</div>
    }
    return null
  }

  get noscript() {
    const {
      noscript, src, width, height, alt
    } = this.props
    if (noscript) {
      return (
        <noscript>
          <img
            alt={alt}
            {...{
              src,
              width,
              height
            }}
          />
        </noscript>
      )
    }
    return null
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
      <amp-img {...{ ...this.properties }}>
        {this.fallback}
        {this.noscript}
      </amp-img>
    )
  }
}

export default Image
