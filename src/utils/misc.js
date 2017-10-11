export const pick = (object, ...props) =>
  Object.assign({}, ...props.map(prop => ({ [prop]: object[prop] })))
