import 'bundle-loader'
import Bundle from '@/components/lazyload/Bundle.js';
import lazyLoad from '@/components/lazyload/LazyLoad';
import News from 'bundle-loader?lazy&name=websiteIndex!@pages/info/News';
import NewsDetail from 'bundle-loader?lazy&name=websiteIndex!@pages/info/NewsDetail';
import Login from 'bundle-loader?lazy&name=Login!@pages/login/Login';
import Register from 'bundle-loader?lazy&name=Register!@pages/register/Register';

const routers = [
    {
        path:'/',
        exact:true,
        component: lazyLoad(News)
    },
    {
        path:'/detail',
        exact:true,
        component: lazyLoad(NewsDetail)
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
