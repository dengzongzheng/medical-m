import 'bundle-loader'
import Bundle from '@/components/lazyload/Bundle.js';
import lazyLoad from '@/components/lazyload/LazyLoad';
import WebsiteIndex from 'bundle-loader?lazy&name=websiteIndex!@pages/website/index/index';
import WebsiteDetail from 'bundle-loader?lazy&name=websiteDetail!@pages/website/detail/detail';
import List from 'bundle-loader?lazy&name=list!@pages/website/list/list';
import About from 'bundle-loader?lazy&name=about!@pages/website/about/about';
import Us from 'bundle-loader?lazy&name=us!@pages/website/us/us';

const routers = [
    {
        path:'/',
        exact:true,
        component: lazyLoad(WebsiteIndex)
    },
    {
        path:'/index',
        exact:true,
        component: lazyLoad(WebsiteIndex)
    },
    {
        path:'/detail',
        exact:true,
        component: lazyLoad(WebsiteDetail)
    },
    {
        path:'/others',
        exact:true,
        component: lazyLoad(List)
    },
    {
        path:'/pictures',
        exact:true,
        component: lazyLoad(List)
    },
    {
        path:'/porcelains',
        exact:true,
        component: lazyLoad(List)
    },
    {
        path:'/jades',
        exact:true,
        component: lazyLoad(List)
    },
    {
        path:'/recommended',
        exact:true,
        component: lazyLoad(List)
    },
    {
        path:'/about',
        exact:true,
        component: lazyLoad(About)
    },
    {
        path:'/us',
        exact:true,
        component: lazyLoad(Us)
    }
];

export default routers;
