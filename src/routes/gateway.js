const Index = resolve =>
{
    require.ensure(['../components/views/gateway/index.vue'], () =>
    {
        resolve(require('../components/views/gateway/index.vue'));
    })
};

export default
{
    path: '/gateway',
    component: Index,
	name: 'gateway',
}