
const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')
Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

const _reactRedux = require('react-redux')
const _react = _interopRequireDefault(require('react'))

const _propTypes = _interopRequireDefault(require('prop-types'))

const _IntlProvider = _interopRequireDefault(require('./IntlProvider'))

const Provider = function Provider(_ref) {
  const { store } = _ref
  const { children } = _ref
  return /* #__PURE__ */_react.default.createElement(_reactRedux.Provider, {
    store
  }, /* #__PURE__ */_react.default.createElement(_IntlProvider.default, null, children))
}

Provider.propTypes = process.env.NODE_ENV !== 'production' ? {
  children: _propTypes.default.element.isRequired
} : {}
const _default = Provider
exports.default = _default
