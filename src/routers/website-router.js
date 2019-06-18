import 'bundle-loader'
import Bundle from '@/components/lazyload/Bundle.js';
import lazyLoad from '@/components/lazyload/LazyLoad';
import News from 'bundle-loader?lazy&name=websiteIndex!@pages/info/News';
import NewsDetail from 'bundle-loader?lazy&name=websiteIndex!@pages/info/NewsDetail';
import Login from 'bundle-loader?lazy&name=Login!@pages/login/Login';
import Register from 'bundle-loader?lazy&name=Register!@pages/register/Register';
import Supervise from 'bundle-loader?lazy&name=Register!@pages/supervise/Supervise';
import About from 'bundle-loader?lazy&name=Register!@pages/about/About';

const routers = [
    {
        path:'/',
        exact:true,
        component: lazyLoad(News)
    },
    {
        path:'/news',
        exact: true,
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
    },
    {
        path:'/supervise',
        exact:true,
        component: lazyLoad(Supervise)
    },
    {
        path:'/aboutUs',
        exact:true,
        component: lazyLoad(About)
    }

];

export default routers;
