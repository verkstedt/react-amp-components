import { oneOf, string, bool, object } from 'prop-types'

const commonPropTypes = {
  heights: string,
  layout: oneOf([
    'nodisplay',
    'fixed',
    'responsive',
    'fixed-height',
    'fill',
    'container',
    'flex-item',
    'intrinsic'
  ]),
  media: string,
  noloading: bool,
  on: string,
  sizes: string,
  width: string,
  height: string,
  fallback: object,
  class: string
}

export default commonPropTypes
