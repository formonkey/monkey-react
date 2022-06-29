import { RecoverPasswordRouter } from '../enums';
import { Login, RecoverPassword, ResetPassword } from '../../../authentication';

export const AUTHENTICATION_ROUTER_MAP_COMPONENTS: any = {
    [RecoverPasswordRouter.Login]: {
        path: '/',
        element: <Login />,
    },
    [RecoverPasswordRouter.ResetPassword]: {
        path: '/reset-password/:token',
        element: <ResetPassword />,
    },
    [RecoverPasswordRouter.RecoverPassword]: {
        path: '/recover-password',
        element: <RecoverPassword />,
    },
};
