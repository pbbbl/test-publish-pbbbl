
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./test-publish-pbbbl.cjs.production.min.js')
} else {
  module.exports = require('./test-publish-pbbbl.cjs.development.js')
}
