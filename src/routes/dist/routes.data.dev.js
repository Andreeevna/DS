"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

var _Product = _interopRequireDefault(require("../components/products/Product"));

var _Catalog = _interopRequireDefault(require("../screens/Catalog/Catalog"));

var _Home = _interopRequireDefault(require("../screens/Home/Home"));

var _LocationPage = _interopRequireDefault(require("../screens/LocationPage/LocationPage"));

var _ProductPage = _interopRequireDefault(require("../screens/ProductPage/ProductPage"));

var _StocksPage = _interopRequireDefault(require("../screens/StocksPage/StocksPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = [{
  path: '/',
  component: _Home["default"]
}, {
  path: '/products/:name?',
  component: _ProductPage["default"]
}, {
  path: '/products/:name/:id',
  component: _Product["default"]
}, {
  path: '/catalog',
  component: _Catalog["default"]
}, {
  path: '/stocks',
  component: _StocksPage["default"]
}, {
  path: '/location',
  component: _LocationPage["default"]
}];
exports.routes = routes;