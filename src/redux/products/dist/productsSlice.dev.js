"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.filterByCollection = exports.productsFetch = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _axios = _interopRequireDefault(require("axios"));

var _constants = require("../../utils/constants");

var _extraReducers;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  items: [],
  filtered: [],
  status: null
};
var productsFetch = (0, _toolkit.createAsyncThunk)('products/productsFetch', function _callee() {
  var response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(_constants.BASE_URL, "/products")));

        case 3:
          response = _context.sent;
          return _context.abrupt("return", response.data);

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
exports.productsFetch = productsFetch;
var productsSlice = (0, _toolkit.createSlice)({
  name: 'products',
  initialState: initialState,
  reducers: {
    filterByCollection: function filterByCollection(state, action) {
      // if (action.payload === 'all') {
      // 	state.filtered = state.items
      // }
      var filter = state.items.filter(function (product) {
        return product.collection === action.payload;
      });
      state.filtered = filter; // console.log('filter', filter)
    }
  },
  extraReducers: (_extraReducers = {}, _defineProperty(_extraReducers, productsFetch.pending, function (state) {
    state.status = 'pending';
  }), _defineProperty(_extraReducers, productsFetch.fulfilled, function (state, action) {
    state.items = action.payload;
    state.filtered = action.payload;
    state.status = 'success';
  }), _defineProperty(_extraReducers, productsFetch.rejected, function (state) {
    state.status = 'rejected';
  }), _extraReducers)
});
var filterByCollection = productsSlice.actions.filterByCollection;
exports.filterByCollection = filterByCollection;
var _default = productsSlice.reducer;
exports["default"] = _default;