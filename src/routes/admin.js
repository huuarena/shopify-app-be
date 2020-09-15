const Router = require('koa-router');
const route = new Router();
var bodyParser = require('koa-bodyparser');

const WidgetsMiddlewares = require('./../middlewares/widgets');
const YoutubeChannelMiddlewares = require('../middlewares/youtube_channel');
const YoutubeApiMiddlewares = require('../middlewares/youtube_api');
const VideosMiddlewares = require('../middlewares/videos');

route.get('/widgets', async (ctx) => {
    const { store_name } = ctx.query;
    const res = await WidgetsMiddlewares.find(store_name);
    ctx.body = res;
});

route.post('/widgets', bodyParser(), async (ctx) => {
    const { store_name } = ctx.query;
    const { data_stringfy } = ctx.request.body;
    const res = await WidgetsMiddlewares.update(store_name, data_stringfy);
    ctx.body = res;
});

route.get('/youtube-channel', async (ctx) => {
    const { store_name } = ctx.query;
    const res = await YoutubeChannelMiddlewares.find(store_name);
    ctx.body = res;
});

route.post('/youtube-channel', bodyParser(), async (ctx) => {
    const { store_name } = ctx.query;
    const { data_stringfy } = ctx.request.body;
    const res = await YoutubeChannelMiddlewares.update(
        store_name,
        data_stringfy,
    );
    ctx.body = res;
});

route.get('/youtube-api', async (ctx) => {
    const { store_name } = ctx.query;
    const res = await YoutubeApiMiddlewares.find(store_name);
    ctx.body = res;
});

route.post('/youtube-api', bodyParser(), async (ctx) => {
    const { store_name } = ctx.query;
    const { data_stringfy } = ctx.request.body;
    const res = await YoutubeApiMiddlewares.update(store_name, data_stringfy);
    ctx.body = res;
});

route.get('/videos', async (ctx) => {
    const { store_name } = ctx.query;
    const res = await VideosMiddlewares.find(store_name);
    ctx.body = res;
});

route.post('/videos', bodyParser(), async (ctx) => {
    const { store_name } = ctx.query;
    const { data_stringfy } = ctx.request.body;
    const res = await VideosMiddlewares.update(store_name, data_stringfy);
    ctx.body = res;
});

module.exports = route;
