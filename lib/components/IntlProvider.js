
const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')
Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

const _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'))

const _reactRedux = require('react-redux')
const _reactIntl = require('react-intl')
function ownKeys(object, enumerableOnly) { const keys = Object.keys(object); if (Object.getOwnPropertySymbols) { let symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(sym => Object.getOwnPropertyDescriptor(object, sym).enumerable); keys.push.apply(keys, symbols) } return keys }

function _objectSpread(target) { for (let i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(new Object(source), true).forEach(key => { (0, _defineProperty2.default)(target, key, source[key]) }) } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) } else { ownKeys(new Object(source)).forEach(key => { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)) }) } } return target }

function defaultSelector(state) {
  const { intl } = state
  return _objectSpread({
    key: intl.locale
  }, intl)
}

const mapStateToProps = function mapStateToProps(state, _ref) {
  const _ref$intlSelector = _ref.intlSelector
  const intlSelector = _ref$intlSelector === void 0 ? defaultSelector : _ref$intlSelector
  return intlSelector(state)
}

const _default = (0, _reactRedux.connect)(mapStateToProps)(_reactIntl.IntlProvider)

exports.default = _default
