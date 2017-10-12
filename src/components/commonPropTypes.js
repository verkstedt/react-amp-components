import { string, bool, object } from 'prop-types'

const commonPropTypes = {
  heights: string,
  layout: string,
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
