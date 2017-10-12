import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

const Layout = ({ children }) => (
  <Helmet>
    <html lang="en" amp="" />
    <meta charSet="utf-8" />
    <script async="" src="https://cdn.ampproject.org/v0.js" />
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
    <noscript
      innerHTML={`
        <style amp-boilerplate>
          body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}
        </style>
      `}
    />
    <style
      amp-boilerplate=""
      cssText={`
        body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}
      `}
    />
    {children}
  </Helmet>
)

Layout.propTypes = { children: PropTypes.arrayOf(PropTypes.node).isRequired }

export default Layout
