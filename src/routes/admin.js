const Router = require('koa-router');
const route = new Router();

const WidgetsMiddlewares = require('./../middlewares/widgets');
const TemplatesMiddlewares = require('./../middlewares/templates');

route.get('/widgets', async (ctx) => {
    const res = await WidgetsMiddlewares.find();
    ctx.body = res;
});

route.post('/widgets', async (ctx) => {
    const res = await WidgetsMiddlewares.update();
    ctx.body = res;
});

route.get('/templates', async (ctx) => {
    const res = await TemplatesMiddlewares.find();
    ctx.body = res;
});

route.post('/templates', async (ctx) => {
    const res = await TemplatesMiddlewares.update();
    ctx.body = res;
});

module.exports = route;
