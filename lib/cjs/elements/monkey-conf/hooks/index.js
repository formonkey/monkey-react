"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMonkeyConf = void 0;
var useMonkeyConf = function () {
    var conf = require("./../../../../../../../../".concat(process.env.REACT_APP_MOKEY));
    // const conf = require(`../../../../../${(process as any).env.REACT_APP_MOKEY}`)
    return {
        name: conf.name,
        token: conf.token,
        store: {
            prefix: conf.store.prefix,
            system: conf.store.system,
        },
        authenticationFlow: conf.authentication.flow.split(','),
        login: {
            endpoint: conf.authentication.forms.login.endpoint,
            fields: conf.authentication.forms.login.fields.split(','),
        },
        theme: conf.theme,
        langs: conf.langs,
        profile: conf.profile,
        notifications: conf.notifications,
        queries: conf.queries,
        menu: conf.menu,
    };
};
exports.useMonkeyConf = useMonkeyConf;
