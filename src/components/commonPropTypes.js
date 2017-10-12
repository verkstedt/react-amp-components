import { oneOf, string, bool, object } from 'prop-types'

const commonPropTypes = {
  heights: string,
  layout: oneOf([
    'nodisplay',
    'fixed',
    'responsive',
    'fixed-width',
    'fixed-height',
    'fill',
    'container',
    'flex-item'
  ]),
  media: string,
  noloading: bool,
  on: string,
  sizes: string,
  width: string,
  height: string,
  fallback: object,
  className: string
}

export default commonPropTypes
