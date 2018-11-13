import React, { Component } from 'react'
import { oneOfType, arrayOf, node, bool } from 'prop-types'
import { Helmet } from 'react-helmet'

import pick from '../utils/pick'
import commonPropTypes from './commonPropTypes'

class Sidebar extends Component {
  static propTypes = {
    ...commonPropTypes,
    disableSessionStates: bool,
    expanded: bool,
    children: oneOfType([
      arrayOf(node),
      node
    ])
  }

  static defaultProps = {
    disableSessionStates: null,
    expanded: null,
    children: []
  }

  get properties() {
    return pick(this.props, ...[
      ...Object.keys(commonPropTypes),
      'disableSessionStates',
      'expanded'
    ])
  }

  render() {
    const { children } = this.props
    return [
      <Helmet key="helmet">
        <script async="" custom-element="amp-accordion" src="https://cdn.ampproject.org/v0/amp-accordion-0.1.js" />
      </Helmet>,
      <amp-accordion {...{ ...this.properties }} key="accordion">
        {children}
      </amp-accordion>
    ]
  }
}

export default Sidebar
