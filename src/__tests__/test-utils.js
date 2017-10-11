import ReactDOMServer from 'react-dom/server'

export const render = (component, props) =>
  ReactDOMServer.renderToStaticMarkup(component, props)

