import {Route} from './name.config';
import Login from 'app/page/Login/Login';
import Regist from 'app/page/regist/Reg'

export const routes = [{
        path: Route.Login,
        component: Login,
    },
    {
        path: Route.Regist,
        component: Regist
    }

]