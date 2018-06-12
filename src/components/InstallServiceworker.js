import React, { Component, Fragment } from 'react'
import { string } from 'prop-types'
import { Helmet } from 'react-helmet'

import pick from '../utils/pick'
import mapKeys from '../utils/mapKeys'
import commonPropTypes from './commonPropTypes'

class InstallServiceWorker extends Component {
  static propTypes = {
    src: string.isRequired,
    dataIframeSrc: string,
    dataNoServiceWorkerFallbackUrlMatch: string,
    dataNoServiceWorkerFallbackShellUrl: string
  }

  static defaultProps = {
    dataIframeSrc: undefined,
    dataNoServiceWorkerFallbackUrlMatch: undefined,
    dataNoServiceWorkerFallbackShellUrl: undefined
  }

  get properties() {
    return mapKeys(pick(this.props, ...[
      ...Object.keys(commonPropTypes),
      'src',
      'dataIframeSrc',
      'dataNoServiceWorkerFallbackUrlMatch',
      'dataNoServiceWorkerFallbackShellUrl'
    ]))
  }

  render() {
    return (
      <Fragment>
        <Helmet key="helmet">
          <script async custom-element="amp-install-serviceworker" src="https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js" />
        </Helmet>
        <amp-install-serviceworker
          key="install-serviceworker"
          {...this.properties}
          layout="nodisplay"
        />
      </Fragment>
    )
  }
}

export default InstallServiceWorker
