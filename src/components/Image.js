import React, { Component } from 'react'
import { string, boolean } from 'prop-types'

import commonPropTypes from './commonPropTypes'

class Image extends Component {

  static propTypes = {
    ...commonPropTypes,
    src: string.isRequired,
    srcset: string,
    noscript: boolean,
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
    const {
      noloading,
      placeholder,
      fallback, // eslint-disable-line no-unused-vars
      ...rest
    } = this.props
    return {
      noloading: noloading && '',
      placeholder: placeholder && '',
      ...rest
    }
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
