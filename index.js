'use strict';

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const logger = require('koa-logger');
const Router = require('koa-router');

const router = new Router();

const adminRoutes = require('./src/routes/admin');

const app = new Koa();

app.use(cors());
app.use(bodyParser());
app.use(logger());
app.use(router.routes());

router.use('/admin', adminRoutes.routes());

app.listen(3002);
