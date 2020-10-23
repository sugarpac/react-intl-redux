
const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')
Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.intlReducer = intlReducer
Object.defineProperty(exports, 'IntlProvider', {
  enumerable: true,
  get: function get() {
    return _IntlProvider2.default
  }
})
Object.defineProperty(exports, 'Provider', {
  enumerable: true,
  get: function get() {
    return _Provider2.default
  }
})
exports.initialState = exports.updateIntl = exports.UPDATE = void 0

const _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'))

var _IntlProvider2 = _interopRequireDefault(require('./components/IntlProvider'))

var _Provider2 = _interopRequireDefault(require('./components/Provider'))

function ownKeys(object, enumerableOnly) { const keys = Object.keys(object); if (Object.getOwnPropertySymbols) { let symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(sym => Object.getOwnPropertyDescriptor(object, sym).enumerable); keys.push.apply(keys, symbols) } return keys }

function _objectSpread(target) { for (let i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(new Object(source), true).forEach(key => { (0, _defineProperty2.default)(target, key, source[key]) }) } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) } else { ownKeys(new Object(source)).forEach(key => { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)) }) } } return target }

const UPDATE = '@@intl/UPDATE'
exports.UPDATE = UPDATE

const updateIntl = function updateIntl(_ref) {
  const { locale } = _ref
  const { formats } = _ref
  const { messages } = _ref
  return {
    type: UPDATE,
    payload: {
      locale,
      formats,
      messages
    }
  }
}

exports.updateIntl = updateIntl
const initialState = {
  locale: 'en',
  messages: {}
}
exports.initialState = initialState

function intlReducer() {
  const state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState
  const action = arguments.length > 1 ? arguments[1] : undefined

  if (action.type !== UPDATE) {
    return state
  }

  return _objectSpread(_objectSpread({}, state), action.payload)
}
