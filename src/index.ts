import Koa from 'koa';
import staticCache from 'koa-static-cache';
import publicRouter from './routes/public';
import  privateRouter from './routes/private';
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
// Routes
app.use(publicRouter.routes());
app.use(publicRouter.allowedMethods());

app.use(privateRouter.routes());
app.use(privateRouter.allowedMethods());
// Response
app.use(responseHandler);
