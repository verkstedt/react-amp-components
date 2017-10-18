/* eslint-disable react/forbid-prop-types, react/no-danger */
import React, { Component } from 'react'
import { object } from 'prop-types'
import { Helmet } from 'react-helmet'

class Analytics extends Component {
  static propTypes = {
    requests: object.isRequired,
    vars: object,
    extraUrlParams: object,
    triggers: object,
    transport: object
  }

  static defaultProps = {
    vars: {},
    extraUrlParams: {},
    triggers: {},
    transport: {}
  }

  render() {
    const {
      requests, vars, extraUrlParams, triggers, transport
    } = this.props
    const payload = {
      requests,
      vars,
      extraUrlParams,
      triggers,
      transport
    }
    return [
      <Helmet key="helmet">
        <script async="" custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js" />
      </Helmet>,
      <amp-analytics>
        <script type="application/json" dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }} />
      </amp-analytics>
    ]
  }
}

export default Analytics
