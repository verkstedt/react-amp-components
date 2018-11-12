import React, { Component } from "react";
import { string, oneOfType, arrayOf, node } from "prop-types";
import { Helmet } from "react-helmet";

import pick from "../utils/pick";
import commonPropTypes from "./commonPropTypes";

class Ad extends Component {
  static propTypes = {
    ...commonPropTypes,
    type: string,
    'data-slot': string.isRequired,
    children: oneOfType([arrayOf(node), node])
  };

  static defaultProps = {
    children: null
  };

  get properties() {
    return pick(this.props, ...[...Object.keys(commonPropTypes)]);
  }

  render() {
    const { children } = this.props;
    return [
      <Helmet key="helmet">
        <script
          async=""
          custom-element="amp-ad"
          src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"
        />
      </Helmet>,
      <amp-ad {...{ ...this.properties }}>{children}</amp-ad>
    ];
  }
}

export default Ad;
