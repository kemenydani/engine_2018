
import dashboardRoutes from './routes/dashboard';
import articleRoutes from './routes/article';
import userRoutes from './routes/user';
import gateWayRoutes from './routes/gateway';
/*
export default [
    //dashboardRoutes,
    articleRoutes,
    userRoutes,
    gateWayRoutes
];
*/

const Main = resolve =>
{
	require.ensure(['./components/views/main.vue'], () =>
	{
		resolve(require('./components/views/main.vue'));
	})
};

const GateWay = resolve =>
{
	require.ensure(['./components/views/gateway/index.vue'], () =>
	{
		resolve(require('./components/views/gateway/index.vue'));
	})
};

export default [
    {
        path: '',
        component: Main,
        children: [
	        dashboardRoutes,
	        articleRoutes,
	        userRoutes
        ]
    },
    {
        path: '/login',
	    component: GateWay
    }
];




