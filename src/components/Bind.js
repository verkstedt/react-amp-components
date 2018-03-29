import React, { Component, Fragment } from 'react'
import { oneOfType, arrayOf, node } from 'prop-types'
import { Helmet } from 'react-helmet'
import getBindAttributeName from '../utils/getBindAttributeName'

class Bind extends Component {
  static propTypes = {
    children: oneOfType([
      arrayOf(node),
      node
    ])
  }

  static defaultProps = {
    children: []
  }

  render() {
    const { children, ...props } = this.props
    const bindAttributes = Object.keys(props).reduce((acc, prop) => ({
      ...acc,
      [getBindAttributeName(prop)]: props[prop]
    }), {})

    return (
      <Fragment>
        <Helmet key="helmet">
          <script async custom-element="amp-bind" src="https://cdn.ampproject.org/v0/amp-bind-0.1.js" />
        </Helmet>
        {React.Children.map(children, child => (
          <child.type {...{ ...child.props, ...bindAttributes }} >
            {child.props.children}
          </child.type>
        ))}
      </Fragment>
    )
  }
}

export default Bind
