import 'bundle-loader'
import Bundle from '@/components/lazyload/Bundle.js';
import lazyLoad from '@/components/lazyload/LazyLoad';
import News from 'bundle-loader?lazy&name=websiteIndex!@pages/info/News';
import NewsDetail from 'bundle-loader?lazy&name=websiteIndex!@pages/info/NewsDetail';

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
    }
];

export default routers;
