/**
* 公有路由，需要校验鉴权
*/
import Router from 'koa-router';
import { login } from '../controllers/login';

const router = new Router();
router.prefix('/api');

router.post('/login', login);

export default router;