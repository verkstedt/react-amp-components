import ReactDOMServer from 'react-dom/server'
import ReactTestRenderer from 'react-test-renderer'

export const renderToStaticMarkup = (component, props) =>
  ReactDOMServer.renderToStaticMarkup(component, props)

export const render = ReactTestRenderer.create
