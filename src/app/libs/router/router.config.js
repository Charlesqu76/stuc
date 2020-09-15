import {
    Routes
} from './name.config';
import Login from 'app/page/Login/Login';
import Regist from 'app/page/regist/Reg';

export const routes = [{
        path: Routes.Login,
        component: Login,
    },
    {
        path: Routes.Regist,
        component: Regist,
    }
]
