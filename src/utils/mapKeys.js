const mapObj = require('map-obj')

// mapping for some props from camelCase to snake-case
const map = {
  dataIframeSrc: 'data-iframe-src',
  dataNoServiceWorkerFallbackUrlMatch: 'data-no-service-worker-fallback-url-match',
  dataNoServiceWorkerFallbackShellUrl: 'data-no-service-worker-fallback-shell-url'
}

// maps keys according to the above map
const mapKeys = obj => mapObj(obj, (key, val) => [map[key] || key, val])

export default mapKeys
