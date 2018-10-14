/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Server.js":
/*!***********************!*\
  !*** ./src/Server.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-graphql */ \"express-graphql\");\n/* harmony import */ var express_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_graphql__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _schema_RootQueryType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schema/RootQueryType */ \"./src/schema/RootQueryType.js\");\n/* harmony import */ var firebase_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase-functions */ \"firebase-functions\");\n/* harmony import */ var firebase_functions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_functions__WEBPACK_IMPORTED_MODULE_3__);\n/**\r\n * @module Server\r\n * @description Entry point for th GraphQL API. <br /> The file requires the following libraries:\r\n * <br/><br/>\r\n * express {@link https://expressjs.com/es/starter/installing.html}<br/>\r\n * expressGraphQL {@link https://github.com/graphql/express-graphql#simple-setup}<br/>\r\n * firebase-functions {@link https://firebase.google.com/docs/functions/}<br/>\r\n * @requires RootQueryType\r\n * <br/><br/>\r\n * @author Alfonso Gomez\r\n*/\n\n\n\n\n/**\r\n * @constant app\r\n * @description constant that holds an express instance\r\n*/\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n/**\r\n * @method use\r\n * @param {String} endpoint predefined endpoint to resolve\r\n * @param {function} callback This function runs when the endpoint is requested\r\n * @see {@link http://expressjs.com/es/api.html#app.use}\r\n*/\n\napp.use(\"/graphql\", express_graphql__WEBPACK_IMPORTED_MODULE_1___default()({\n  schema: _schema_RootQueryType__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  graphiql: true\n}));\napp.use(\"/feedDatabase\", function () {});\n/**\r\n * @constant port\r\n * @description constant holding the value of the PORT environment variable or port 3000\r\n*/\n\nvar port = process.env.PORT || 3000;\nexports.app = firebase_functions__WEBPACK_IMPORTED_MODULE_3__[\"https\"].onRequest(app);\n\n//# sourceURL=webpack:///./src/Server.js?");

/***/ }),

/***/ "./src/helpers/functions.js":
/*!**********************************!*\
  !*** ./src/helpers/functions.js ***!
  \**********************************/
/*! exports provided: app, getCurrentDateString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"app\", function() { return app; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCurrentDateString\", function() { return getCurrentDateString; });\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase-admin */ \"firebase-admin\");\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_admin__WEBPACK_IMPORTED_MODULE_0__);\n/**\r\n * @module HelperFunctions\r\n * @description Helper Functions\r\n * @requires firebase-admin\r\n * @author Alfonso Gomez\r\n*/\n\n/**\r\n * @constant app\r\n * @description constant that contains an instance of the real time database admin privileges\r\n*/\n\nvar app = firebase_admin__WEBPACK_IMPORTED_MODULE_0__[\"initializeApp\"]();\n/**\r\n * @function getCurrentDateString\r\n * @description Returns current date formated as 'dmyyyy'\r\n*/\n\nvar getCurrentDateString = function getCurrentDateString() {\n  var d = new Date();\n  var date = d.getDate().toString();\n  var month = (d.getMonth() + 1).toString();\n  var year = d.getFullYear().toString();\n  return date + month + year;\n};\n\n//# sourceURL=webpack:///./src/helpers/functions.js?");

/***/ }),

/***/ "./src/schema/MovieType.js":
/*!*********************************!*\
  !*** ./src/schema/MovieType.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ \"graphql\");\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase-admin */ \"firebase-admin\");\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_admin__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/functions */ \"./src/helpers/functions.js\");\n/* harmony import */ var _TheaterType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TheaterType */ \"./src/schema/TheaterType.js\");\n/**\r\n * @module MovieType\r\n * @description this module contains the Movie Schema definition\r\n * <br/><br/>\r\n * @requires graphql\r\n * @requires GraphQLObjectType\r\n * @requires GraphQLString\r\n * @requires TheaterType\r\n * @requires HelperFunctions\r\n * @author Alfonso Gomez\r\n * @see {@link https://graphql.org/graphql-js/type/}\r\n*/\n\n\n\n\n/**\r\n * @constant graphQLObjectType\r\n * @description Destructuring graphQL object to retreive graphQLObjectType and GraphQLString\r\n*/\n\n/**\r\n * @constant GraphQLString\r\n * @description Destructuring graphQL object to retreive GraphQLString\r\n*/\n\n/**\r\n * @constant date\r\n * @description constant that contains the current date in format dmyyyy from the helper function getCurrentDateString\r\n * @see module:HelperFunctions\r\n*/\n\nvar date = _helpers_functions__WEBPACK_IMPORTED_MODULE_2__[\"getCurrentDateString\"]();\n/**\r\n * @function graphQLObjectType\r\n * @param {object} config object containing the properties {@link name} and {@link fields}\r\n * @property {key} name Contains the name of the type definition \"Movie\"\r\n * @property {key} fields Object that containes the schema definition\r\n * @description Constructor class for the MovieType schema\r\n*/\n\nvar MovieType = new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLObjectType\"]({\n  /**\r\n    * @typedef {string} name Contains the name of the type definition \"Movie\"\r\n  */\n  name: \"Movie\",\n\n  /**\r\n    * @typedef {Object} fields\r\n    * @property {String} id string defining the id of the movie\r\n    * @property {String} name string defining the name of the movie\r\n    * @property {String} rating string defining the rating of the movie\r\n    * @property {String} duration string defining the duration of the movie\r\n    * @property {String} classification string defining the classification of the movie\r\n    * @property {String} genere string defining the genere of the movie\r\n    * @property {String} director string defining the director of the movie\r\n    * @property {String} releaseDate string defining the releaseDate of the movie\r\n    * @property {String} synopsis string defining the synopsis of the movie\r\n    * @property {String} trailer string defining the trailer of the movie\r\n    * @property {String} cover_photo string defining the cover_photo of the movie\r\n    * @property {String} small_photo string defining the small_photo of the movie\r\n    * @property {Array} theaters string defining the small_photo of the movie\r\n  */\n  fields: function fields() {\n    return {\n      id: {\n        type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"]\n      },\n      name: {\n        type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"]\n      },\n      rating: {\n        type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"]\n      },\n      duration: {\n        type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"]\n      },\n      classification: {\n        type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"]\n      },\n      genere: {\n        type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"]\n      },\n      director: {\n        type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"]\n      },\n      releaseDate: {\n        type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"]\n      },\n      synopsis: {\n        type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"]\n      },\n      trailer: {\n        type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"]\n      },\n      cover_photo: {\n        type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"]\n      },\n      small_photo: {\n        type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"]\n      },\n      theaters: {\n        type: Object(graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLList\"])(_TheaterType__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n        resolve: function resolve(parentValue, args) {\n          return _helpers_functions__WEBPACK_IMPORTED_MODULE_2__[\"app\"].database().ref(\"/\".concat(date, \"/theaters/\")).once(\"value\").then(function (data) {\n            data = data.val();\n            return data.filter(function (u) {\n              return parentValue.theaters.includes(u.id);\n            });\n          });\n        }\n      }\n    };\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovieType);\n\n//# sourceURL=webpack:///./src/schema/MovieType.js?");

/***/ }),

/***/ "./src/schema/RootQueryType.js":
/*!*************************************!*\
  !*** ./src/schema/RootQueryType.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ \"graphql\");\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MovieType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MovieType */ \"./src/schema/MovieType.js\");\n/* harmony import */ var _TheaterType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TheaterType */ \"./src/schema/TheaterType.js\");\n/* harmony import */ var _helpers_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/functions */ \"./src/helpers/functions.js\");\n/**\r\n * @module RootQueryType\r\n * @description This module contains all the graphQL schema definitions<br/><br/>\r\n * @requires MovieType\r\n * @requires TheaterType\r\n * @requires HelperFunctions\r\n * @requires graphql\r\n * @requires GraphQLObjectType\r\n * @requires GraphQLString\r\n * @requires GraphQLSchema\r\n * @author Alfonso Gomez\r\n * @see {@link https://graphql.org/graphql-js/type/}\r\n*/\n\n\n\n\n/**\r\n * @constant date\r\n * @description constant that contains the current date in format dmyyyy from the helper function getCurrentDateString\r\n * @see module:HelperFunctions\r\n*/\n\nvar date = _helpers_functions__WEBPACK_IMPORTED_MODULE_3__[\"getCurrentDateString\"]();\n/**\r\n * @function graphQLObjectType\r\n * @param {object} config object containing the properties {@link name} and {@link fields}\r\n * @property {key} name Contains the name of the type definition \"RootQueryType\"\r\n * @property {key} fields Object that containes the schema definition\r\n * @description Constructor class for the RootQueryType schema\r\n*/\n\nvar RootQuery = new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLObjectType\"]({\n  /**\r\n    * @typedef {string} name Contains the name of the type definition \"RootQueryType\"\r\n  */\n  name: 'RootQueryType',\n\n  /**\r\n    * @typedef {Object} fields\r\n    * @property {Object} movie definition for the movie key\r\n    * @property {Object} type reference to the {@link MovieType}\r\n    * @property {Object} args params required to execute the query\r\n    * @property {function} resolve resolver function for the query\r\n    * @see module:MovieType\r\n  */\n  fields: {\n    movie: {\n      type: _MovieType__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      args: {\n        id: {\n          type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"]\n        }\n      },\n      resolve: function resolve(parentValue, args) {\n        return _helpers_functions__WEBPACK_IMPORTED_MODULE_3__[\"app\"].database().ref(\"/\".concat(date, \"/movies/\")).once(\"value\").then(function (data) {\n          data = data.val();\n          return data.find(function (u) {\n            return u.id === args.id;\n          });\n        });\n      }\n    },\n    theater: {\n      type: _TheaterType__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n      args: {\n        id: {\n          type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"]\n        }\n      },\n      resolve: function resolve(parentValue, args) {\n        return _helpers_functions__WEBPACK_IMPORTED_MODULE_3__[\"app\"].database().ref(\"/\".concat(date, \"/theaters/\")).once(\"value\").then(function (data) {\n          data = data.val();\n          return data.find(function (u) {\n            return u.id === args.id;\n          });\n        });\n      }\n    }\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLSchema\"]({\n  query: RootQuery\n}));\n\n//# sourceURL=webpack:///./src/schema/RootQueryType.js?");

/***/ }),

/***/ "./src/schema/TheaterType.js":
/*!***********************************!*\
  !*** ./src/schema/TheaterType.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ \"graphql\");\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);\n/**\r\n * @module TheaterType\r\n * @description this module contains the Theater Schema definition\r\n * <br/><br/>\r\n * @requires graphql\r\n * @requires GraphQLObjectType\r\n * @requires GraphQLString\r\n * @author Alfonso Gomez\r\n * @see {@link https://graphql.org/graphql-js/type/}\r\n*/\n\n/**\r\n * @constant graphQLObjectType\r\n * @description Destructuring graphQL object to retreive graphQLObjectType and GraphQLString\r\n*/\n\n/**\r\n * @constant GraphQLString\r\n * @description Destructuring graphQL object to retreive GraphQLString\r\n*/\n\n/**\r\n * @function graphQLObjectType\r\n * @param {object} config object containing the properties {@link name} and {@link fields}\r\n * @property {key} name Contains the name of the type definition \"Theater\"\r\n * @property {key} fields Object that containes the schema definition\r\n * @description Constructor class for the TheaterType schema\r\n*/\n\nvar TheaterType = new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLObjectType\"]({\n  /**\r\n    * @typedef {string} name Contains the name of the type definition \"Theater\"\r\n  */\n  name: \"Theater\",\n\n  /**\r\n    * @typedef {Object} fields\r\n    * @property {String} id string defining the id of the Theater\r\n    * @property {String} name string defining the name of the Theater\r\n    * @property {String} address string defining the address of the Theater\r\n  */\n  fields: function fields() {\n    return {\n      id: {\n        type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"]\n      },\n      name: {\n        type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"]\n      },\n      address: {\n        type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"]\n      }\n    };\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (TheaterType);\n\n//# sourceURL=webpack:///./src/schema/TheaterType.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-graphql":
/*!**********************************!*\
  !*** external "express-graphql" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-graphql\");\n\n//# sourceURL=webpack:///external_%22express-graphql%22?");

/***/ }),

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase-admin\");\n\n//# sourceURL=webpack:///external_%22firebase-admin%22?");

/***/ }),

/***/ "firebase-functions":
/*!*************************************!*\
  !*** external "firebase-functions" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase-functions\");\n\n//# sourceURL=webpack:///external_%22firebase-functions%22?");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql\");\n\n//# sourceURL=webpack:///external_%22graphql%22?");

/***/ })

/******/ });