/**
 * GlobeFactor logo SVG generator — shared between generate-icons.js and Logo.js.
 *
 * Globe-inspired icon matching the GlobeMark in Logo.js.
 * SVG's viewBox attribute handles scaling to any output size automatically.
 *
 * Pure CommonJS — safe to require() in Node.js scripts.
 */

function getGlobeMarkSvg(size, bgColor) {
  var s = size || 38
  return (
    '<svg width="' +
    s +
    '" height="' +
    s +
    '" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">\n' +
    '  <defs><linearGradient id="globeGrad" x1="0" y1="0" x2="38" y2="38" gradientUnits="userSpaceOnUse">' +
    '<stop offset="0%" stop-color="#0F766E"/><stop offset="100%" stop-color="#1E3A5F"/>' +
    "</linearGradient></defs>\n" +
    '  <rect width="38" height="38" rx="10" fill="url(#globeGrad)"/>\n' +
    '  <circle cx="19" cy="19" r="11" stroke="white" stroke-width="1.5" fill="none" opacity="0.9"/>\n' +
    '  <ellipse cx="19" cy="19" rx="11" ry="4" stroke="white" stroke-width="1" fill="none" opacity="0.5"/>\n' +
    '  <ellipse cx="19" cy="19" rx="5" ry="11" stroke="white" stroke-width="1" fill="none" opacity="0.5"/>\n' +
    '  <line x1="8" y1="19" x2="30" y2="19" stroke="white" stroke-width="1" opacity="0.4"/>\n' +
    '  <line x1="19" y1="8" x2="19" y2="30" stroke="white" stroke-width="1" opacity="0.4"/>\n' +
    "</svg>"
  )
}

// Keep backward-compatible names
function getMountainMarkSvg(size, bgColor) {
  return getGlobeMarkSvg(size, bgColor)
}

function getReelMarkSvg(size, bgColor) {
  return getGlobeMarkSvg(size, bgColor)
}

function generateLogoSvg(opts) {
  var o = opts || {}
  return getGlobeMarkSvg(o.size || 100, o.bgColor)
}

module.exports = {
  getMountainMarkSvg: getMountainMarkSvg,
  getReelMarkSvg: getReelMarkSvg,
  getGlobeMarkSvg: getGlobeMarkSvg,
  generateLogoSvg: generateLogoSvg,
}
