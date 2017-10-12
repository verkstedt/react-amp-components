import React, { Component } from 'react'
import { string, object } from 'prop-types'
import { Helmet } from 'react-helmet'

import { pick } from '../utils/misc'
import commonPropTypes from './commonPropTypes'

class Sidebar extends Component {

  static propTypes = {
    ...commonPropTypes,
    id: string.isRequired,
    side: string,
    children: object.isRequired
  }

  get properties() {
    return pick(this.props, ...[
      ...Object.keys(commonPropTypes),
      'id',
      'side'
    ])
  }

  render() {
    const { children } = this.props
    return [
      <Helmet key="helmet">
        <script async="" custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js" />
      </Helmet>,
      <amp-sidebar {...{ ...this.properties }} key="sidebar">
        {children}
      </amp-sidebar>
    ]
  }
}

export default Sidebar
