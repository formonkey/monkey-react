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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GENERIC_FORM_CONFIG_PARSED = exports.GENERIC_FORM_ELEMENTS = void 0;
var react_1 = __importDefault(require("react"));
var adds_1 = require("../../adds");
var tags_1 = require("../../tags");
var file_1 = require("../../file");
var roles_1 = require("../../roles");
var multi_1 = require("../../multi");
var inputs_1 = require("../../inputs");
var radios_1 = require("../../radios");
var selects_1 = require("../../selects");
var store_1 = require("../../store");
var password_1 = require("../../password");
var checkbox_1 = require("../../checkbox");
var text_area_1 = require("../../text-area");
var separator_1 = require("../../separator");
var datepicker_1 = require("../../datepicker");
exports.GENERIC_FORM_ELEMENTS = {
    add: adds_1.Add,
    file: file_1.File,
    tags: tags_1.Tags,
    radio: radios_1.Radio,
    select: selects_1.Select,
    text: text_area_1.TextArea,
    permissions: roles_1.Role,
    checkbox: checkbox_1.Checkbox,
    separator: separator_1.Separator,
    input: function (props) { return react_1.default.createElement(inputs_1.Input, __assign({}, props)); },
    multi: function (props) { return react_1.default.createElement(multi_1.Multi, __assign({}, props)); },
    password: function (props) { return react_1.default.createElement(password_1.Password, __assign({}, props)); },
    date: function (props) { return react_1.default.createElement(datepicker_1.Datepicker, __assign({}, props, { type: "date" })); },
    range: function (props) { return react_1.default.createElement(datepicker_1.Datepicker, __assign({}, props, { type: "range" })); },
    number: function (props) { return react_1.default.createElement(inputs_1.Input, __assign({}, props, { type: "number" })); },
};
exports.GENERIC_FORM_CONFIG_PARSED = {
    REQUEST: function (get, field, token) { return __awaiter(void 0, void 0, void 0, function () {
        var access, language, response, data;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    access = get(store_1.StoreKeys.Token);
                    language = get(store_1.StoreKeys.Language);
                    return [4 /*yield*/, fetch("".concat(process.env.REACT_APP_HOST).concat(field.config.endpoint), {
                            method: field.config.method,
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                                Authorization: access ? "Bearer ".concat(access[token]) : '',
                                'Accept-Language': (_a = language === null || language === void 0 ? void 0 : language.code) !== null && _a !== void 0 ? _a : 'en',
                            },
                        }).then(function (res) {
                            if (res.status >= 200 && res.status < 300) {
                                return res.json();
                            }
                            return res.json().then(function (error) {
                                throw error;
                            });
                        })];
                case 1:
                    response = _b.sent();
                    data = (field.config.data ? response[field.config.data] : response).map(function (item) { return ({
                        value: item[field.config.parsed.value],
                        label: item[field.config.parsed.label],
                    }); });
                    field.data = data;
                    return [2 /*return*/];
            }
        });
    }); },
};
