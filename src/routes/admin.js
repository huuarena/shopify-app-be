const Router = require('koa-router');
const AdminApi = new Router();
var bodyParser = require('koa-bodyparser');

const YoutAppMiddlewares = require('./../middlewares/yout_app');
const WidgetsMiddlewares = require('./../middlewares/widgets');

const SESSION_DEMO = {
    shop: 'abc-store.shopify.com.vn',
    accessToken: '',
};

AdminApi.get('/yout-app', async (ctx) => {
    const { shop } = ctx.session || SESSION_DEMO;
    const res = await YoutAppMiddlewares.find(shop);
    ctx.body = res;
});

AdminApi.post('/yout-app', bodyParser(), async (ctx) => {
    const { shop } = ctx.session || SESSION_DEMO;
    const { field, data_stringify } = ctx.request.body;
    const res = await YoutAppMiddlewares.update(shop, field, data_stringify);
    ctx.body = res;
});

AdminApi.get('/widgets', async (ctx) => {
    const { id } = ctx.request.query;
    const { shop } = ctx.session || SESSION_DEMO;
    const res = await WidgetsMiddlewares.findById(shop, id);
    ctx.body = res;
});

module.exports = AdminApi;
