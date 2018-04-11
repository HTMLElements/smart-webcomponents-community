(function () {
    'use strict';
    if (typeof HTMLElement !== 'function') {
        var _HTMLElement = function () { };
        _HTMLElement.prototype = HTMLElement.prototype;
        HTMLElement = _HTMLElement;
    }

    if (!Array.prototype.findIndex) {
        Object.defineProperty(Array.prototype, 'findIndex', {
            value: function (predicate) {
                if (this == null) {
                    throw new TypeError('Array.prototype.findIndex called on null or undefined');
                }
                if (typeof predicate !== 'function') {
                    throw new TypeError('predicate must be a function');
                }
                var list = Object(this);
                var length = list.length >>> 0;
                var thisArg = arguments[1];
                var value;

                for (var i = 0; i < length; i++) {
                    value = list[i];
                    if (predicate.call(thisArg, value, i, list)) {
                        return i;
                    }
                }
                return -1;
            },
            enumerable: false,
            configurable: false,
            writable: false
        });
    }

    if (!Array.prototype.find) {
        Object.defineProperty(Array.prototype, 'find', {
            value: function (predicate) {
                if (this == null) {
                    throw new TypeError('Array.prototype.find called on null or undefined');
                }
                if (typeof predicate !== 'function') {
                    throw new TypeError('predicate must be a function');
                }
                var list = Object(this);
                var length = list.length >>> 0;
                var thisArg = arguments[1];
                var value;

                for (var i = 0; i < length; i++) {
                    value = list[i];
                    if (predicate.call(thisArg, value, i, list)) {
                        return value;
                    }
                }
                return undefined;
            }
        });
    }

    if (typeof Object.assign != 'function') {
        (function () {
            Object.assign = function (target) {
                // We must check against these specific cases.
                if (target === undefined || target === null) {
                    throw new TypeError('Cannot convert undefined or null to object');
                }

                var output = Object(target);
                for (var index = 1; index < arguments.length; index++) {
                    var source = arguments[index];
                    if (source !== undefined && source !== null) {
                        for (var nextKey in source) {
                            if (source.hasOwnProperty(nextKey)) {
                                output[nextKey] = source[nextKey];
                            }
                        }
                    }
                }
                return output;
            };
        })();
    }

    if (!String.prototype.startsWith) {
        String.prototype.startsWith = function (searchString, position) {
            position = position || 0;
            return this.substr(position, searchString.length) === searchString;
        };
    }
    if (!Math.log10) {
        Math.log10 = function (value) {
            var v = +value, s;
            if (v > 0 && /^(?:10*|0\.0*1)$/.test(s = '' + v)) {
                return v < 1 ?
                    2 - s.length :
                    s.length - 1;
            }
            return Math.log(v) / Math.LN10
        }
    }

    //Used in smart-list-box
    if (!String.prototype.endsWith) {
        String.prototype.endsWith = function (searchString, position) {
            var subjectString = this.toString();
            if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
                position = subjectString.length;
            }
            position -= searchString.length;
            var lastIndex = subjectString.lastIndexOf(searchString, position);
            return lastIndex !== -1 && lastIndex === position;
        };
    }

    //isInteger polyfill
    Number.isInteger = Number.isInteger || function (value) {
        return typeof value === 'number' &&
            isFinite(value) &&
            Math.floor(value) === value;
    };

    //KeyboardEvent.key polyfill
    if (('KeyboardEvent' in window) || !('key' in KeyboardEvent.prototype)) {
        var keyboardeventKeyPolyfill = {
            keys: {
                3: 'Cancel',
                6: 'Help',
                8: 'Backspace',
                9: 'Tab',
                12: 'Clear',
                13: 'Enter',
                16: 'Shift',
                17: 'Control',
                18: 'Alt',
                19: 'Pause',
                20: 'CapsLock',
                27: 'Escape',
                28: 'Convert',
                29: 'NonConvert',
                30: 'Accept',
                31: 'ModeChange',
                32: ' ',
                33: 'PageUp',
                34: 'PageDown',
                35: 'End',
                36: 'Home',
                37: 'ArrowLeft',
                38: 'ArrowUp',
                39: 'ArrowRight',
                40: 'ArrowDown',
                41: 'Select',
                42: 'Print',
                43: 'Execute',
                44: 'PrintScreen',
                45: 'Insert',
                46: 'Delete',
                48: ['0', ')'],
                49: ['1', '!'],
                50: ['2', '@'],
                51: ['3', '#'],
                52: ['4', '$'],
                53: ['5', '%'],
                54: ['6', '^'],
                55: ['7', '&'],
                56: ['8', '*'],
                57: ['9', '('],
                91: 'OS',
                93: 'ContextMenu',
                144: 'NumLock',
                145: 'ScrollLock',
                181: 'VolumeMute',
                182: 'VolumeDown',
                183: 'VolumeUp',
                186: [';', ':'],
                187: ['=', '+'],
                188: [',', '<'],
                189: ['-', '_'],
                190: ['.', '>'],
                191: ['/', '?'],
                192: ['`', '~'],
                219: ['[', '{'],
                220: ['\\', '|'],
                221: [']', '}'],
                222: ["'", '"'],
                224: 'Meta',
                225: 'AltGraph',
                246: 'Attn',
                247: 'CrSel',
                248: 'ExSel',
                249: 'EraseEof',
                250: 'Play',
                251: 'ZoomOut'
            }
        };

        // Function keys (F1-24).
        var i;
        for (i = 1; i < 25; i++) {
            keyboardeventKeyPolyfill.keys[111 + i] = 'F' + i;
        }

        // Printable ASCII characters.
        var letter = '';
        for (i = 65; i < 91; i++) {
            letter = String.fromCharCode(i);
            keyboardeventKeyPolyfill.keys[i] = [letter.toLowerCase(), letter.toUpperCase()];
        }

        // Polyfill `key` on `KeyboardEvent`.
        var proto = {
            get: function (x) {
                var key = keyboardeventKeyPolyfill.keys[this.which || this.keyCode];

                if (Array.isArray(key)) {
                    key = key[+this.shiftKey];
                }

                return key;
            }
        };

        Object.defineProperty(KeyboardEvent.prototype, 'key', proto);
    }

    // Production steps of ECMA-262, Edition 6, 22.1.2.1
    if (!Array.from) {
        Array.from = (function () {
            var toStr = Object.prototype.toString;
            var isCallable = function (fn) {
                return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
            };
            var toInteger = function (value) {
                var number = Number(value);
                if (isNaN(number)) { return 0; }
                if (number === 0 || !isFinite(number)) { return number; }
                return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
            };
            var maxSafeInteger = Math.pow(2, 53) - 1;
            var toLength = function (value) {
                var len = toInteger(value);
                return Math.min(Math.max(len, 0), maxSafeInteger);
            };

            // The length property of the from method is 1.
            return function from(arrayLike/*, mapFn, thisArg */) {
                // 1. Let C be the this value.
                var C = this;

                // 2. Let items be ToObject(arrayLike).
                var items = Object(arrayLike);

                // 3. ReturnIfAbrupt(items).
                if (arrayLike == null) {
                    throw new TypeError('Array.from requires an array-like object - not null or undefined');
                }

                // 4. If mapfn is undefined, then let mapping be false.
                var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
                var T;
                if (typeof mapFn !== 'undefined') {
                    // 5. else
                    // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
                    if (!isCallable(mapFn)) {
                        throw new TypeError('Array.from: when provided, the second argument must be a function');
                    }

                    // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
                    if (arguments.length > 2) {
                        T = arguments[2];
                    }
                }

                // 10. Let lenValue be Get(items, "length").
                // 11. Let len be ToLength(lenValue).
                var len = toLength(items.length);

                // 13. If IsConstructor(C) is true, then
                // 13. a. Let A be the result of calling the [[Construct]] internal method 
                // of C with an argument list containing the single item len.
                // 14. a. Else, Let A be ArrayCreate(len).
                var A = isCallable(C) ? Object(new C(len)) : new Array(len);

                // 16. Let k be 0.
                var k = 0;
                // 17. Repeat, while k < len… (also steps a - h)
                var kValue;
                while (k < len) {
                    kValue = items[k];
                    if (mapFn) {
                        A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
                    } else {
                        A[k] = kValue;
                    }
                    k += 1;
                }
                // 18. Let putStatus be Put(A, "length", len, true).
                A.length = len;
                // 20. Return A.
                return A;
            };
        }());
    }

    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector;
    }

    if (!Element.prototype.closest) {
        Element.prototype.closest = function (s) {
            var el = this;
            if (!document.documentElement.contains(el)) return null;
            do {
                if (el.matches(s)) return el;
                el = el.parentElement || el.parentNode;
            } while (el !== null && el.nodeType === 1);
            return null;
        };
    }

    if (!String.prototype.repeat) {
        String.prototype.repeat = function (count) {
            'use strict';
            if (this == null) {
                throw new TypeError('can\'t convert ' + this + ' to object');
            }
            var str = '' + this;
            count = +count;
            if (count != count) {
                count = 0;
            }
            if (count < 0) {
                throw new RangeError('repeat count must be non-negative');
            }
            if (count == Infinity) {
                throw new RangeError('repeat count must be less than infinity');
            }
            count = Math.floor(count);
            if (str.length == 0 || count == 0) {
                return '';
            }
            // Ensuring count is a 31-bit integer allows us to heavily optimize the
            // main part. But anyway, most current (August 2014) browsers can't handle
            // strings 1 << 28 chars or longer, so:
            if (str.length * count >= 1 << 28) {
                throw new RangeError('repeat count must not overflow maximum string size');
            }
            var rpt = '';
            for (var i = 0; i < count; i++) {
                rpt += str;
            }
            return rpt;
        }
    }

    if (!Array.prototype.fill) {
        Object.defineProperty(Array.prototype, 'fill', {
            value: function (value) {

                if (this == null) {
                    throw new TypeError('this is null or not defined');
                }

                var O = Object(this);

                var len = O.length >>> 0;

                var start = arguments[1];
                var relativeStart = start >> 0;

                var k = relativeStart < 0 ?
                    Math.max(len + relativeStart, 0) :
                    Math.min(relativeStart, len);

                var end = arguments[2];
                var relativeEnd = end === undefined ?
                    len : end >> 0;

                var final = relativeEnd < 0 ?
                    Math.max(len + relativeEnd, 0) :
                    Math.min(relativeEnd, len);

                while (k < final) {
                    O[k] = value;
                    k++;
                }

                return O;
            }
        });
    }

    if ("document" in self) {

        // Full polyfill for browsers with no classList support
        // Including IE < Edge missing SVGElement.classList
        if (
               !("classList" in document.createElement("_"))
            || document.createElementNS
            && !("classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))
        ) {

            (function (view) {

                
/* Smart HTML Elements v1.0.0 (2018-April) 
Copyright (c) 2011-2018 jQWidgets. 
License: http://htmlelements.com/pricing/ */

 "use strict";

                if (!('Element' in view)) return;

                var
                      classListProp = "classList"
                    , protoProp = "prototype"
                    , elemCtrProto = view.Element[protoProp]
                    , objCtr = Object
                    , strTrim = String[protoProp].trim || function () {
                        return this.replace(/^\s+|\s+$/g, "");
                    }
                    , arrIndexOf = Array[protoProp].indexOf || function (item) {
                        var
                              i = 0
                            , len = this.length
                        ;
                        for (; i < len; i++) {
                            if (i in this && this[i] === item) {
                                return i;
                            }
                        }
                        return -1;
                    }
                    // Vendors: please allow content code to instantiate DOMExceptions
                    , DOMEx = function (type, message) {
                        this.name = type;
                        this.code = DOMException[type];
                        this.message = message;
                    }
                    , checkTokenAndGetIndex = function (classList, token) {
                        if (token === "") {
                            throw new DOMEx(
                                  "SYNTAX_ERR"
                                , "The token must not be empty."
                            );
                        }
                        if (/\s/.test(token)) {
                            throw new DOMEx(
                                  "INVALID_CHARACTER_ERR"
                                , "The token must not contain space characters."
                            );
                        }
                        return arrIndexOf.call(classList, token);
                    }
                    , ClassList = function (elem) {
                        var
                              trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
                            , classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
                            , i = 0
                            , len = classes.length
                        ;
                        for (; i < len; i++) {
                            this.push(classes[i]);
                        }
                        this._updateClassName = function () {
                            elem.setAttribute("class", this.toString());
                        };
                    }
                    , classListProto = ClassList[protoProp] = []
                    , classListGetter = function () {
                        return new ClassList(this);
                    }
                ;
                // Most DOMException implementations don't allow calling DOMException's toString()
                // on non-DOMExceptions. Error's toString() is sufficient here.
                DOMEx[protoProp] = Error[protoProp];
                classListProto.item = function (i) {
                    return this[i] || null;
                };
                classListProto.contains = function (token) {
                    return ~checkTokenAndGetIndex(this, token + "");
                };
                classListProto.add = function () {
                    var
                          tokens = arguments
                        , i = 0
                        , l = tokens.length
                        , token
                        , updated = false
                    ;
                    do {
                        token = tokens[i] + "";
                        if (!~checkTokenAndGetIndex(this, token)) {
                            this.push(token);
                            updated = true;
                        }
                    }
                    while (++i < l);

                    if (updated) {
                        this._updateClassName();
                    }
                };
                classListProto.remove = function () {
                    var
                          tokens = arguments
                        , i = 0
                        , l = tokens.length
                        , token
                        , updated = false
                        , index
                    ;
                    do {
                        token = tokens[i] + "";
                        index = checkTokenAndGetIndex(this, token);
                        while (~index) {
                            this.splice(index, 1);
                            updated = true;
                            index = checkTokenAndGetIndex(this, token);
                        }
                    }
                    while (++i < l);

                    if (updated) {
                        this._updateClassName();
                    }
                };
                classListProto.toggle = function (token, force) {
                    var
                          result = this.contains(token)
                        , method = result ?
                            force !== true && "remove"
                        :
                            force !== false && "add"
                    ;

                    if (method) {
                        this[method](token);
                    }

                    if (force === true || force === false) {
                        return force;
                    } else {
                        return !result;
                    }
                };
                classListProto.replace = function (token, replacement_token) {
                    var index = checkTokenAndGetIndex(token + "");
                    if (~index) {
                        this.splice(index, 1, replacement_token);
                        this._updateClassName();
                    }
                }
                classListProto.toString = function () {
                    return this.join(" ");
                };

                if (objCtr.defineProperty) {
                    var classListPropDesc = {
                        get: classListGetter
                        , enumerable: true
                        , configurable: true
                    };
                    try {
                        objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
                    } catch (ex) { // IE 8 doesn't support enumerable:true
                        // adding undefined to fight this issue https://github.com/eligrey/classList.js/issues/36
                        // modernie IE8-MSW7 machine has IE8 8.0.6001.18702 and is affected
                        if (ex.number === undefined || ex.number === -0x7FF5EC54) {
                            classListPropDesc.enumerable = false;
                            objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
                        }
                    }
                } else if (objCtr[protoProp].__defineGetter__) {
                    elemCtrProto.__defineGetter__(classListProp, classListGetter);
                }

            }(self));

        }

        // There is full or partial native classList support, so just check if we need
        // to normalize the add/remove and toggle APIs.

        (function () {
            
/* Smart HTML Elements v1.0.0 (2018-April) 
Copyright (c) 2011-2018 jQWidgets. 
License: http://htmlelements.com/pricing/ */

 "use strict";

            var testElement = document.createElement("_");

            testElement.classList.add("c1", "c2");

            // Polyfill for IE 10/11 and Firefox <26, where classList.add and
            // classList.remove exist but support only one argument at a time.
            if (!testElement.classList.contains("c2")) {
                var createMethod = function (method) {
                    var original = DOMTokenList.prototype[method];

                    DOMTokenList.prototype[method] = function (token) {
                        var i, len = arguments.length;

                        for (i = 0; i < len; i++) {
                            token = arguments[i];
                            original.call(this, token);
                        }
                    };
                };
                createMethod('add');
                createMethod('remove');
            }

            testElement.classList.toggle("c3", false);

            // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
            // support the second argument.
            if (testElement.classList.contains("c3")) {
                var _toggle = DOMTokenList.prototype.toggle;

                DOMTokenList.prototype.toggle = function (token, force) {
                    if (1 in arguments && !this.contains(token) === !force) {
                        return force;
                    } else {
                        return _toggle.call(this, token);
                    }
                };

            }

            // replace() polyfill
            if (!("replace" in document.createElement("_").classList)) {
                DOMTokenList.prototype.replace = function (token, replacement_token) {
                    var
                          tokens = this.toString().split(" ")
                        , index = tokens.indexOf(token + "")
                    ;
                    if (~index) {
                        tokens = tokens.slice(index);
                        this.remove.apply(this, tokens);
                        this.add(replacement_token);
                        this.add.apply(this, tokens.slice(1));
                    }
                }
            }

            testElement = null;
        }());

    }
})();

(function (global) {
    var babelHelpers = global.babelHelpers = {};
    babelHelpers.typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    babelHelpers.jsx = function () {
        var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7;
        return function createRawReactElement(type, props, key, children) {
            var defaultProps = type && type.defaultProps;
            var childrenLength = arguments.length - 3;

            if (!props && childrenLength !== 0) {
                props = {};
            }

            if (props && defaultProps) {
                for (var propName in defaultProps) {
                    if (props[propName] === void 0) {
                        props[propName] = defaultProps[propName];
                    }
                }
            } else if (!props) {
                props = defaultProps || {};
            }

            if (childrenLength === 1) {
                props.children = children;
            } else if (childrenLength > 1) {
                var childArray = Array(childrenLength);

                for (var i = 0; i < childrenLength; i++) {
                    childArray[i] = arguments[i + 3];
                }

                props.children = childArray;
            }

            return {
                $$typeof: REACT_ELEMENT_TYPE,
                type: type,
                key: key === undefined ? null : '' + key,
                ref: null,
                props: props,
                _owner: null
            };
        };
    }();

    babelHelpers.asyncIterator = function (iterable) {
        if (typeof Symbol === "function") {
            if (Symbol.asyncIterator) {
                var method = iterable[Symbol.asyncIterator];
                if (method != null) return method.call(iterable);
            }

            if (Symbol.iterator) {
                return iterable[Symbol.iterator]();
            }
        }

        throw new TypeError("Object is not async iterable");
    };

    babelHelpers.asyncGenerator = function () {
        function AwaitValue(value) {
            this.value = value;
        }

        function AsyncGenerator(gen) {
            var front, back;

            function send(key, arg) {
                return new Promise(function (resolve, reject) {
                    var request = {
                        key: key,
                        arg: arg,
                        resolve: resolve,
                        reject: reject,
                        next: null
                    };

                    if (back) {
                        back = back.next = request;
                    } else {
                        front = back = request;
                        resume(key, arg);
                    }
                });
            }

            function resume(key, arg) {
                try {
                    var result = gen[key](arg);
                    var value = result.value;

                    if (value instanceof AwaitValue) {
                        Promise.resolve(value.value).then(function (arg) {
                            resume("next", arg);
                        }, function (arg) {
                            resume("throw", arg);
                        });
                    } else {
                        settle(result.done ? "return" : "normal", result.value);
                    }
                } catch (err) {
                    settle("throw", err);
                }
            }

            function settle(type, value) {
                switch (type) {
                    case "return":
                        front.resolve({
                            value: value,
                            done: true
                        });
                        break;

                    case "throw":
                        front.reject(value);
                        break;

                    default:
                        front.resolve({
                            value: value,
                            done: false
                        });
                        break;
                }

                front = front.next;

                if (front) {
                    resume(front.key, front.arg);
                } else {
                    back = null;
                }
            }

            this._invoke = send;

            if (typeof gen.return !== "function") {
                this.return = undefined;
            }
        }

        if (typeof Symbol === "function" && Symbol.asyncIterator) {
            AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
                return this;
            };
        }

        AsyncGenerator.prototype.next = function (arg) {
            return this._invoke("next", arg);
        };

        AsyncGenerator.prototype.throw = function (arg) {
            return this._invoke("throw", arg);
        };

        AsyncGenerator.prototype.return = function (arg) {
            return this._invoke("return", arg);
        };

        return {
            wrap: function (fn) {
                return function () {
                    return new AsyncGenerator(fn.apply(this, arguments));
                };
            },
            await: function (value) {
                return new AwaitValue(value);
            }
        };
    }();

    babelHelpers.asyncGeneratorDelegate = function (inner, awaitWrap) {
        var iter = {},
            waiting = false;

        function pump(key, value) {
            waiting = true;
            value = new Promise(function (resolve) {
                resolve(inner[key](value));
            });
            return {
                done: false,
                value: awaitWrap(value)
            };
        }

        ;

        if (typeof Symbol === "function" && Symbol.iterator) {
            iter[Symbol.iterator] = function () {
                return this;
            };
        }

        iter.next = function (value) {
            if (waiting) {
                waiting = false;
                return value;
            }

            return pump("next", value);
        };

        if (typeof inner.throw === "function") {
            iter.throw = function (value) {
                if (waiting) {
                    waiting = false;
                    throw value;
                }

                return pump("throw", value);
            };
        }

        if (typeof inner.return === "function") {
            iter.return = function (value) {
                return pump("return", value);
            };
        }

        return iter;
    };

    babelHelpers.asyncToGenerator = function (fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    };

    babelHelpers.classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    };

    babelHelpers.createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    babelHelpers.defineEnumerableProperties = function (obj, descs) {
        for (var key in descs) {
            var desc = descs[key];
            desc.configurable = desc.enumerable = true;
            if ("value" in desc) desc.writable = true;
            Object.defineProperty(obj, key, desc);
        }

        return obj;
    };

    babelHelpers.defaults = function (obj, defaults) {
        var keys = Object.getOwnPropertyNames(defaults);

        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = Object.getOwnPropertyDescriptor(defaults, key);

            if (value && value.configurable && obj[key] === undefined) {
                Object.defineProperty(obj, key, value);
            }
        }

        return obj;
    };

    babelHelpers.defineProperty = function (obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    };

    babelHelpers.extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    babelHelpers.get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);

            if (parent === null) {
                return undefined;
            } else {
                return get(parent, property, receiver);
            }
        } else if ("value" in desc) {
            return desc.value;
        } else {
            var getter = desc.get;

            if (getter === undefined) {
                return undefined;
            }

            return getter.call(receiver);
        }
    };

    babelHelpers.inherits = function (subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    };

    babelHelpers.instanceof = function (left, right) {
        if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
            return right[Symbol.hasInstance](left);
        } else {
            return left instanceof right;
        }
    };

    babelHelpers.interopRequireDefault = function (obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    };

    babelHelpers.interopRequireWildcard = function (obj) {
        if (obj && obj.__esModule) {
            return obj;
        } else {
            var newObj = {};

            if (obj != null) {
                for (var key in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                }
            }

            newObj.default = obj;
            return newObj;
        }
    };

    babelHelpers.newArrowCheck = function (innerThis, boundThis) {
        if (innerThis !== boundThis) {
            throw new TypeError("Cannot instantiate an arrow function");
        }
    };

    babelHelpers.objectDestructuringEmpty = function (obj) {
        if (obj == null) throw new TypeError("Cannot destructure undefined");
    };

    babelHelpers.objectWithoutProperties = function (obj, keys) {
        var target = {};

        for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
            target[i] = obj[i];
        }

        return target;
    };

    babelHelpers.possibleConstructorReturn = function (self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    };

    babelHelpers.selfGlobal = typeof global === "undefined" ? self : global;

    babelHelpers.set = function set(object, property, value, receiver) {
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);

            if (parent !== null) {
                set(parent, property, value, receiver);
            }
        } else if ("value" in desc && desc.writable) {
            desc.value = value;
        } else {
            var setter = desc.set;

            if (setter !== undefined) {
                setter.call(receiver, value);
            }
        }

        return value;
    };

    babelHelpers.slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;

            try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done) ; _n = true) {
                    _arr.push(_s.value);

                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }

            return _arr;
        }

        return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    babelHelpers.slicedToArrayLoose = function (arr, i) {
        if (Array.isArray(arr)) {
            return arr;
        } else if (Symbol.iterator in Object(arr)) {
            var _arr = [];

            for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
                _arr.push(_step.value);

                if (i && _arr.length === i) break;
            }

            return _arr;
        } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
    };

    babelHelpers.taggedTemplateLiteral = function (strings, raw) {
        return Object.freeze(Object.defineProperties(strings, {
            raw: {
                value: Object.freeze(raw)
            }
        }));
    };

    babelHelpers.taggedTemplateLiteralLoose = function (strings, raw) {
        strings.raw = raw;
        return strings;
    };

    babelHelpers.temporalRef = function (val, name, undef) {
        if (val === undef) {
            throw new ReferenceError(name + " is not defined - temporal dead zone");
        } else {
            return val;
        }
    };

    babelHelpers.temporalUndefined = {};

    babelHelpers.toArray = function (arr) {
        return Array.isArray(arr) ? arr : Array.from(arr);
    };

    babelHelpers.toConsumableArray = function (arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length) ; i < arr.length; i++) arr2[i] = arr[i];

            return arr2;
        } else {
            return Array.from(arr);
        }
    };
})(typeof global === "undefined" ? self : global);
(function () {
    var needsTemplate = typeof HTMLTemplateElement === "undefined";
    if (/Trident/.test(navigator.userAgent)) {
        (function () {
            var importNode = document.importNode;
            document.importNode = function () {
                var n = importNode.apply(document, arguments);
                if (n.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                    var f = document.createDocumentFragment();
                    f.appendChild(n);
                    return f;
                } else {
                    return n;
                }
            };
        })();
    }
    var needsCloning = function () {
        if (!needsTemplate) {
            var t = document.createElement("template");
            var t2 = document.createElement("template");
            t2.content.appendChild(document.createElement("div"));
            t.content.appendChild(t2);
            var clone = t.cloneNode(true);
            return clone.content.childNodes.length === 0 || clone.content.firstChild.content.childNodes.length === 0;
        }
    }();
    var TEMPLATE_TAG = "template";
    var TemplateImpl = function () { };
    if (needsTemplate) {
        var contentDoc = document.implementation.createHTMLDocument("template");
        var canDecorate = true;
        var templateStyle = document.createElement("style");
        templateStyle.textContent = TEMPLATE_TAG + "{display:none;}";
        var head = document.head;
        head.insertBefore(templateStyle, head.firstElementChild);
        TemplateImpl.prototype = Object.create(HTMLElement.prototype);
        TemplateImpl.decorate = function (template) {
            if (template.content) {
                return;
            }
            template.content = contentDoc.createDocumentFragment();
            var child;
            while (child = template.firstChild) {
                template.content.appendChild(child);
            }
            template.cloneNode = function (deep) {
                return TemplateImpl.cloneNode(this, deep);
            };
            if (canDecorate) {
                try {
                    Object.defineProperty(template, "innerHTML", {
                        get: function () {
                            var o = "";
                            for (var e = this.content.firstChild; e; e = e.nextSibling) {
                                o += e.outerHTML || escapeData(e.data);
                            }
                            return o;
                        },
                        set: function (text) {
                            contentDoc.body.innerHTML = text;
                            TemplateImpl.bootstrap(contentDoc);
                            while (this.content.firstChild) {
                                this.content.removeChild(this.content.firstChild);
                            }
                            while (contentDoc.body.firstChild) {
                                this.content.appendChild(contentDoc.body.firstChild);
                            }
                        },
                        configurable: true
                    });
                } catch (err) {
                    canDecorate = false;
                }
            }
            TemplateImpl.bootstrap(template.content);
        };
        TemplateImpl.bootstrap = function (doc) {
            var templates = doc.querySelectorAll(TEMPLATE_TAG);
            for (var i = 0, l = templates.length, t; i < l && (t = templates[i]) ; i++) {
                TemplateImpl.decorate(t);
            }
        };
        document.addEventListener("DOMContentLoaded", function () {
            TemplateImpl.bootstrap(document);
        });
        var createElement = document.createElement;
        document.createElement = function () {
            
/* Smart HTML Elements v1.0.0 (2018-April) 
Copyright (c) 2011-2018 jQWidgets. 
License: http://htmlelements.com/pricing/ */

 "use strict";
            var el = createElement.apply(document, arguments);
            if (el.localName === "template") {
                TemplateImpl.decorate(el);
            }
            return el;
        };
        var createElementNS = document.createElementNS;
        document.createElementNS = function () {
            
/* Smart HTML Elements v1.0.0 (2018-April) 
Copyright (c) 2011-2018 jQWidgets. 
License: http://htmlelements.com/pricing/ */

 "use strict";
            var el = createElementNS.apply(document, arguments);
            if (el.namespaceURI === "http://www.w3.org/1999/xhtml" && el.localName === "template") {
                TemplateImpl.decorate(el);
            }
            return el;
        };
        var escapeDataRegExp = /[&\u00A0<>]/g;
        function escapeReplace(c) {
            switch (c) {
                case "&":
                    return "&amp;";

                case "<":
                    return "&lt;";

                case ">":
                    return "&gt;";

                case " ":
                    return "&nbsp;";
            }
        }
        function escapeData(s) {
            return s.replace(escapeDataRegExp, escapeReplace);
        }
    }
    if (needsTemplate || needsCloning) {
        var nativeCloneNode = Node.prototype.cloneNode;
        TemplateImpl.cloneNode = function (template, deep) {
            var clone = nativeCloneNode.call(template, false);
            if (this.decorate) {
                this.decorate(clone);
            }
            if (deep) {
                clone.content.appendChild(nativeCloneNode.call(template.content, true));
                this.fixClonedDom(clone.content, template.content);
            }
            return clone;
        };
        TemplateImpl.fixClonedDom = function (clone, source) {
            if (!source.querySelectorAll) return;
            var s$ = source.querySelectorAll(TEMPLATE_TAG);
            var t$ = clone.querySelectorAll(TEMPLATE_TAG);
            for (var i = 0, l = t$.length, t, s; i < l; i++) {
                s = s$[i];
                t = t$[i];
                if (this.decorate) {
                    this.decorate(s);
                }
                t.parentNode.replaceChild(s.cloneNode(true), t);
            }
        };
        var originalImportNode = document.importNode;
        Node.prototype.cloneNode = function (deep) {
            var dom = nativeCloneNode.call(this, deep);
            if (deep) {
                TemplateImpl.fixClonedDom(dom, this);
            }
            return dom;
        };
        document.importNode = function (element, deep) {
            if (element.localName === TEMPLATE_TAG) {
                return TemplateImpl.cloneNode(element, deep);
            } else {
                var dom = originalImportNode.call(document, element, deep);
                if (deep) {
                    TemplateImpl.fixClonedDom(dom, element);
                }
                return dom;
            }
        };
        if (needsCloning) {
            HTMLTemplateElement.prototype.cloneNode = function (deep) {
                return TemplateImpl.cloneNode(this, deep);
            };
        }
    }
    if (needsTemplate) {
        window.HTMLTemplateElement = TemplateImpl;
    }
})();
