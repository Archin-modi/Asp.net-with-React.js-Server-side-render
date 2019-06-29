/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant 
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	// All JavaScript in here will be loaded server-side

	// Expose components globally so ReactJS.NET can use them
	var Components = __webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Components"] = __webpack_require__(2);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant 
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	module.exports = {
	  Blogs: __webpack_require__(3)
	};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Blogs = function (_React$Component) {
	    _inherits(Blogs, _React$Component);

	    function Blogs(props) {
	        _classCallCheck(this, Blogs);

	        var _this = _possibleConstructorReturn(this, (Blogs.__proto__ || Object.getPrototypeOf(Blogs)).call(this, props));

	        _this.state = {
	            load: false
	        };
	        _this.hanlderclick = _this.hanlderclick.bind(_this);
	        return _this;
	    }

	    _createClass(Blogs, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {}
	    }, {
	        key: "hanlderclick",
	        value: function hanlderclick() {
	            //alert();
	            this.setState({ load: !this.state.load });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;

	            var b = this.props.blog;
	            console.log(b);
	            var commentNodes = this.props.blog.map(function (b) {
	                return React.createElement(
	                    "div",
	                    { className: "col-md-4" },
	                    React.createElement(
	                        "h4",
	                        null,
	                        b.title
	                    ),
	                    React.createElement(
	                        "p",
	                        null,
	                        b.body
	                    ),
	                    React.createElement(
	                        "button",
	                        { onClick: _this2.hanlderclick },
	                        "Click"
	                    )
	                );
	            });
	            var loading = React.createElement(
	                "h1",
	                null,
	                "loading..."
	            );
	            return React.createElement(
	                "div",
	                null,
	                " ",
	                React.createElement(
	                    "button",
	                    { onClick: this.hanlderclick },
	                    "click"
	                ),
	                this.state.load ? loading : commentNodes
	            );
	        }
	    }]);

	    return Blogs;
	}(React.Component);

	module.exports = Blogs;

/***/ })
/******/ ]);