import Koa from 'koa';
import staticCache from 'koa-static-cache';
import { publicDir } from '../config';
import routes from './routes/public';
import  _routes from './routes/private';
import allowedMethods from 'koa-router';
import { errorHandler, responseHandler } from './middlewares/response';
import { cacheMiddleware } from "./middlewares/cache";
import { Logger } from "./middlewares/logger";
import cors from 'koa2-cors';

const bodyParser = require('koa-bodyparser')();
const logger = new Logger();
const app = new Koa();

app.use(cors());    //解决跨域问题
// local Logger
app.use(logger.httpLogger);
app.use(logger.getLoggers);
// Error Handler
app.use(errorHandler);

app.use(bodyParser);

app.use(cacheMiddleware);
app.use(staticCache(publicDir));
// Routes
app.use(routes(), allowedMethods());
app.use(_routes(), _allowedMethods());
// Response
app.use(responseHandler);
