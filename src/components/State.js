/* eslint-disable react/no-danger */
import React, { Component, Fragment } from 'react'
import { shape, string } from 'prop-types'
import { Helmet } from 'react-helmet'

class State extends Component {
  static propTypes = {
    children: shape({}),
    id: string
  }

  static defaultProps = {
    children: {},
    id: null
  }

  render() {
    const { children, id } = this.props

    return (
      <Fragment>
        <Helmet key="helmet">
          <script async custom-element="amp-bind" src="https://cdn.ampproject.org/v0/amp-bind-0.1.js" />
        </Helmet>
        <amp-state id={id}>
          <script
            type="application/json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(children)
            }}
          />
        </amp-state>
      </Fragment>
    )
  }
}

export default State
