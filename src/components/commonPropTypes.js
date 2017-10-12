import { number, string, bool, object } from 'prop-types'

const commonPropTypes = {
  heights: string,
  layout: string,
  media: string,
  noloading: bool,
  on: string,
  sizes: string,
  width: number,
  height: number,
  fallback: object,
  className: string
}

export default commonPropTypes
