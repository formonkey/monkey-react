import { useMonkeyConf } from '../../monkey-conf';
export var useStore = function () {
    var prefix = useMonkeyConf().store.prefix;
    return {
        get: function (key) {
            var value = localStorage.getItem("".concat(prefix).concat(key));
            return value ? JSON.parse(value) : null;
        },
        del: function (key) { return localStorage.removeItem("".concat(prefix).concat(key)); },
        set: function (key, value) { return localStorage.setItem("".concat(prefix).concat(key), JSON.stringify(value)); },
    };
};
