import React, { Component } from 'react'
import { string, oneOfType, arrayOf, node, oneOf } from 'prop-types'
import { Helmet } from 'react-helmet'

import pick from '../utils/pick'
import commonPropTypes from './commonPropTypes'

class Form extends Component {
  static propTypes = {
    ...commonPropTypes,
    target: oneOf(['_blank', '_top']),
    method: oneOf(['POST', 'GET']),
    action: string,
    'action-xhr': string,
    'custom-validation-reporting': oneOf([
      'show-first-on-submit',
      'show-all-on-submit',
      'as-you-go'
    ]),
    on: string,
    children: oneOfType([
      arrayOf(node),
      node
    ])
  }

  static defaultProps = {
    target: null,
    method: 'GET',
    action: null,
    'action-xhr': null,
    'custom-validation-reporting': null,
    on: null,
    children: []
  }

  get properties() {
    return pick(this.props, ...[
      ...Object.keys(commonPropTypes),
      'target',
      'method',
      'action',
      'action-xhr',
      'custom-validation-reporting',
      'on'
    ])
  }

  render() {
    const { children } = this.props
    return [
      <Helmet key="helmet">
        <script async="" custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js" />
      </Helmet>,
      <form {...{ ...this.properties }} key="form">
        {children}
      </form>
    ]
  }
}

export default Form
