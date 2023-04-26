"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/hello";
exports.ids = ["pages/api/hello"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "console":
/*!**************************!*\
  !*** external "console" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("console");

/***/ }),

/***/ "(api)/./component/Json/Conn.js":
/*!********************************!*\
  !*** ./component/Json/Conn.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var console__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! console */ \"console\");\n/* harmony import */ var console__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(console__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n\nconst MONGO_URI = \"mongodb+srv://shradhdhasagar1502:admin123@cluster0.mzad3bb.mongodb.net/?retryWrites=true&w=majority\";\n\nconst connectMongo = async ()=>{\n    try {\n        const { connection  } = await mongoose__WEBPACK_IMPORTED_MODULE_1___default().connect(MONGO_URI);\n        if (connection.readyState == 1) {\n            console.log(\"Database Connected\");\n        }\n    } catch (errors) {\n        return Promise.reject(console__WEBPACK_IMPORTED_MODULE_0__.error);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectMongo);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb21wb25lbnQvSnNvbi9Db25uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQStCO0FBRS9CLE1BQU1DLFlBQVU7QUFDZTtBQUUvQixNQUFNRSxlQUFhLFVBQVM7SUFDeEIsSUFBRztRQUNELE1BQU0sRUFBQ0MsV0FBVSxFQUFDLEdBQUUsTUFBTUYsdURBQWdCLENBQUNEO1FBRTNDLElBQUdHLFdBQVdFLFVBQVUsSUFBRSxHQUFFO1lBQzFCQyxRQUFRQyxHQUFHLENBQUM7UUFDZCxDQUFDO0lBR0gsRUFBQyxPQUFNQyxRQUFPO1FBQ1YsT0FBT0MsUUFBUUMsTUFBTSxDQUFDWCwwQ0FBS0E7SUFDL0I7QUFFSjtBQUVBLGlFQUFlRyxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RwX2JhY2tlbmQvLi9jb21wb25lbnQvSnNvbi9Db25uLmpzPzlmMmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXJyb3IgfSBmcm9tIFwiY29uc29sZVwiXHJcblxyXG5jb25zdCBNT05HT19VUkk9XCJtb25nb2RiK3NydjovL3NocmFkaGRoYXNhZ2FyMTUwMjphZG1pbjEyM0BjbHVzdGVyMC5temFkM2JiLm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIiBcclxuaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiXHJcblxyXG5jb25zdCBjb25uZWN0TW9uZ289YXN5bmMoKT0+e1xyXG4gICAgdHJ5e1xyXG4gICAgICBjb25zdCB7Y29ubmVjdGlvbn09IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09fVVJJKSBcclxuXHJcbiAgICAgIGlmKGNvbm5lY3Rpb24ucmVhZHlTdGF0ZT09MSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJEYXRhYmFzZSBDb25uZWN0ZWRcIilcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICB9Y2F0Y2goZXJyb3JzKXtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXHJcbiAgICB9XHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RNb25nbzsiXSwibmFtZXMiOlsiZXJyb3IiLCJNT05HT19VUkkiLCJtb25nb29zZSIsImNvbm5lY3RNb25nbyIsImNvbm5lY3Rpb24iLCJjb25uZWN0IiwicmVhZHlTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvcnMiLCJQcm9taXNlIiwicmVqZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./component/Json/Conn.js\n");

/***/ }),

/***/ "(api)/./pages/api/hello.js":
/*!****************************!*\
  !*** ./pages/api/hello.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _component_Json_Conn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/Json/Conn */ \"(api)/./component/Json/Conn.js\");\n\nfunction handler(req, res) {\n    _component_Json_Conn__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    res.status(200).json({\n        name: \"Jhon Doe\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaGVsbG8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBb0Q7QUFHckMsU0FBU0MsUUFBUUMsR0FBRyxFQUFDQyxHQUFHLEVBQUM7SUFDcENILDREQUFZQTtJQUNaRyxJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUNDLE1BQUs7SUFBVTtBQUN6QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RwX2JhY2tlbmQvLi9wYWdlcy9hcGkvaGVsbG8uanM/MWY3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ubmVjdE1vbmdvIGZyb20gXCIuLi8uLi9jb21wb25lbnQvSnNvbi9Db25uXCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSxyZXMpe1xyXG4gICAgY29ubmVjdE1vbmdvXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bmFtZTonSmhvbiBEb2UnfSlcclxufSJdLCJuYW1lcyI6WyJjb25uZWN0TW9uZ28iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/hello.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/hello.js"));
module.exports = __webpack_exports__;

})();