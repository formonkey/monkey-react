"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
var react_1 = __importDefault(require("react"));
var react_query_1 = require("react-query");
var queryClient = new react_query_1.QueryClient();
var Query = function (_a) {
    var children = _a.children;
    return react_1.default.createElement(react_query_1.QueryClientProvider, { client: queryClient }, children);
};
exports.Query = Query;
