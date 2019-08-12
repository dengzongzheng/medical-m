import 'bundle-loader'
import Bundle from '@/components/lazyload/Bundle.js';
import lazyLoad from '@/components/lazyload/LazyLoad';
import Login from 'bundle-loader?lazy&name=Login!@pages/login/Login';
import Register from 'bundle-loader?lazy&name=Register!@pages/register/Register';

const routers = [
    {
        path:'/',
        exact:true,
        component: lazyLoad(Login)
    },
    {
        path:'/login',
        exact:true,
        component: lazyLoad(Login)
    },
    {
        path:'/register',
        exact:true,
        component: lazyLoad(Register)
    }
];

export default routers;
