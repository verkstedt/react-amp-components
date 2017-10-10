import React, { Component } from 'react'
import { string, object } from 'prop-types'
import { Helmet } from 'react-helmet'

class Sidebar extends Component {

  static propTypes = {
    id: string.isRequired,
    layout: string.isRequired,
    side: string,
    children: object.isRequired
  }

  render() {
    const { id, layout, side, children } = this.props
    return [
      <Helmet key="helmet">
        <script async="" custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js" />
      </Helmet>,
      <amp-sidebar {...{ id, layout, side }} key="sidebar">
        {children}
      </amp-sidebar>
    ]
  }
}

export default Sidebar
