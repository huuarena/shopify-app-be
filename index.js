'use strict';

const koa = require('koa');
var bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const logger = require('koa-logger');
const Router = require('koa-router');

const router = new Router();

const adminRoutes = require('./src/routes/admin');

const app = new koa();

app.use(bodyParser());
app.use(cors());
app.use(logger());
app.use(router.routes());

router.use('/admin', adminRoutes.routes());

app.listen(3002);
