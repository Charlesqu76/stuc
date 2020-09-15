import {
    Routes
} from './name.config';
import Login from 'app/page/Login/Login';
import Regist from 'app/page/regist/Reg';
import HcCom from 'app/page/huche/Huche';

export const routes = [{
        path: Routes.Login,
        component: Login,
    },
    {
        path: Routes.Regist,
        component: Regist,
    },{
        path: Routes.Huche,
        component: HcCom,
    }
]
