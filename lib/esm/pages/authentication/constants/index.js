var _a;
import React from "react";
import { RecoverPasswordRouter } from "../enums";
import { Login, RecoverPassword, ResetPassword } from "../../../authentication";
export var AUTHENTICATION_ROUTER_MAP_COMPONENTS = (_a = {},
    _a[RecoverPasswordRouter.Login] = {
        path: "/",
        element: React.createElement(Login, null),
    },
    _a[RecoverPasswordRouter.ResetPassword] = {
        path: "/reset-password/:token",
        element: React.createElement(ResetPassword, null),
    },
    _a[RecoverPasswordRouter.RecoverPassword] = {
        path: "/recover-password",
        element: React.createElement(RecoverPassword, null),
    },
    _a);
