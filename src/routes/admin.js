const Router = require('koa-router');
const route = new Router();
var bodyParser = require('koa-bodyparser');

const WidgetsMiddlewares = require('./../middlewares/widgets');
const TemplatesMiddlewares = require('./../middlewares/templates');

route.get('/widgets', async (ctx) => {
    const res = await WidgetsMiddlewares.find();
    ctx.body = res;
});

route.post('/widgets', bodyParser(), async (ctx) => {
    const { data_stringfy } = ctx.request.body;
    // console.log('data_stringfy :>> ', data_stringfy);
    const res = await WidgetsMiddlewares.update(data_stringfy);
    ctx.body = res;
});

route.get('/templates', async (ctx) => {
    const res = await TemplatesMiddlewares.find();
    ctx.body = res;
});

route.post('/templates', async (ctx) => {
    const { data_stringfy } = ctx.request.body;
    // console.log('data_stringfy :>> ', data_stringfy);
    const res = await TemplatesMiddlewares.update(data_stringfy);
    ctx.body = res;
});

module.exports = route;
