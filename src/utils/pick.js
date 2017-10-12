export default (object, ...props) =>
  Object.assign({}, ...props.map(prop => ({ [prop]: object[prop] })))
