'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/js-spec.cjs.production.js')
} else {
  module.exports = require('./dist/js-spec.cjs.development.js')
}
