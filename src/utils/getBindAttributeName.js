export default (prop) => {
  // TODO: look into other potential 'special' props
  if (prop === 'className' || prop === '[className]') {
    return '[class]'
  }
  if ((/^\[.*\]$/).test(prop)) {
    // if prop is already of the form '[...]'
    return prop
  }
  return `[${prop}]`
}
