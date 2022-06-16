"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStore = void 0;
var monkey_conf_1 = require("../../monkey-conf");
var useStore = function () {
    var prefix = (0, monkey_conf_1.useMonkeyConf)().store.prefix;
    return {
        get: function (key) {
            var value = localStorage.getItem("".concat(prefix).concat(key));
            return value ? JSON.parse(value) : null;
        },
        del: function (key) { return localStorage.removeItem("".concat(prefix).concat(key)); },
        set: function (key, value) { return localStorage.setItem("".concat(prefix).concat(key), JSON.stringify(value)); },
    };
};
exports.useStore = useStore;
