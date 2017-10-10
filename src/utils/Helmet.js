import { Helmet } from 'react-helmet'

/* Temp hack, due to https://github.com/nfl/react-helmet/issues/79 */
const reactHelmetCustomAttribute = / data-react-helmet="true"/g
const renderHelmetPropertyToString = property =>
  property.toString().replace(reactHelmetCustomAttribute, '')

const helmetProperties = [
  'base',
  'bodyAttributes',
  'htmlAttributes',
  'link',
  'meta',
  'noscript',
  'script',
  'style',
  'title'
]

const filterOutCustomProperty = helmetStatic =>
  helmetProperties.reduce((acc, prop) => {
    acc[prop] = renderHelmetPropertyToString(helmetStatic[prop])
    return acc
  }, {})

export default Object.assign(Helmet, {
  renderStaticClean: () => {
    const helmetStatic = Helmet.renderStatic()
    return filterOutCustomProperty(helmetStatic)
  }
})
