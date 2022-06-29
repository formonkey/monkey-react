"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Widgets = void 0;
var react_1 = __importStar(require("react"));
var constants_1 = require("./constants");
var store_1 = require("../store");
var monkey_conf_1 = require("../monkey-conf");
var react_i18next_1 = require("react-i18next");
var Widgets = function (_a) {
    var conf = _a.conf, props = __rest(_a, ["conf"]);
    var get = (0, store_1.useStore)().get;
    var t = (0, react_i18next_1.useTranslation)().t;
    var token = (0, monkey_conf_1.useMonkeyConf)().token;
    var _b = (0, react_1.useState)([]), classNames = _b[0], setClassNames = _b[1];
    var _c = (0, react_1.useState)([]), widgets = _c[0], setWidgets = _c[1];
    var _d = (0, react_1.useState)(false), isReady = _d[0], setIsReady = _d[1];
    (0, react_1.useEffect)(function () {
        var _a, _b;
        if (((_a = conf === null || conf === void 0 ? void 0 : conf.widgets) === null || _a === void 0 ? void 0 : _a.length) > 3) {
            throw new Error('Only maximum 3 row widgets are allowed');
        }
        var temp = (_b = conf.widgets) === null || _b === void 0 ? void 0 : _b.map(function (_, idx) {
            if (conf.widgets.length === 3) {
                return 'col-xl-4 col-lg-4 col-md-4';
            }
            else if (conf.widgets.length === 2) {
                return idx === 0 ? 'col-xl-4 col-lg-5 col-md-5' : 'col-xl-8 col-lg-7 col-md-7';
            }
            else {
                return 'col-12';
            }
        });
        setClassNames(temp);
    }, []);
    (0, react_1.useEffect)(function () {
        var data = [];
        classNames.forEach(function (_, idx) {
            var temp = [];
            conf.widgets[idx].forEach(function (widget, order) { return __awaiter(void 0, void 0, void 0, function () {
                var data_1, access, language, endpoint_1, response;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            widget.order = order;
                            if (!(((_a = widget.request) === null || _a === void 0 ? void 0 : _a.method) === 'STORE')) return [3 /*break*/, 1];
                            data_1 = get(widget.request.endpoint);
                            temp[widget.order] = __assign(__assign({}, widget), { data: data_1 });
                            return [3 /*break*/, 4];
                        case 1:
                            if (!widget.request) return [3 /*break*/, 3];
                            access = get(store_1.StoreKeys.Token);
                            language = get(store_1.StoreKeys.Language);
                            endpoint_1 = widget.request.endpoint;
                            if (widget.request.replace) {
                                Object.keys(widget.request.replace).forEach(function (key) {
                                    endpoint_1 = endpoint_1.replace(key, props[widget.request.replace[key]]);
                                });
                            }
                            return [4 /*yield*/, fetch("".concat(process.env.REACT_APP_HOST).concat(endpoint_1), {
                                    method: widget.request.method,
                                    headers: {
                                        Accept: 'application/json',
                                        'Content-Type': 'application/json',
                                        Authorization: access ? "Bearer ".concat(access[token]) : '',
                                        'Accept-Language': (_b = language === null || language === void 0 ? void 0 : language.code) !== null && _b !== void 0 ? _b : 'en',
                                    },
                                }).then(function (res) {
                                    if (res.status >= 200 && res.status < 300) {
                                        return res.json();
                                    }
                                    return res.json().then(function (error) {
                                        throw error;
                                    });
                                })];
                        case 2:
                            response = _c.sent();
                            temp[widget.order] = __assign(__assign({}, widget), { data: widget.request.data
                                    ? response[widget.request.data]
                                    : response });
                            return [3 /*break*/, 4];
                        case 3:
                            temp[widget.order] = widget;
                            _c.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
            data[idx] = temp;
            setTimeout(function () {
                if (data.length === conf.widgets.length) {
                    setWidgets(__spreadArray([], data, true));
                    setTimeout(function () { return setIsReady(true); }, 500);
                }
            }, 500);
        });
    }, [classNames]);
    return (react_1.default.createElement("div", { className: "row" }, isReady
        ? classNames === null || classNames === void 0 ? void 0 : classNames.map(function (className, idx) {
            var _a;
            return (react_1.default.createElement("div", { key: idx, className: className }, (_a = widgets[idx]) === null || _a === void 0 ? void 0 : _a.map(function (widget) { var _a; return (_a = constants_1.WIDGET_ELEMENTS === null || constants_1.WIDGET_ELEMENTS === void 0 ? void 0 : constants_1.WIDGET_ELEMENTS[widget.element]) === null || _a === void 0 ? void 0 : _a.call(constants_1.WIDGET_ELEMENTS, { conf: widget, idx: idx, t: t }); })));
        })
        : null));
};
exports.Widgets = Widgets;
