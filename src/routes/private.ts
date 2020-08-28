/**
 * 私有路由，需要校验鉴权
 */
import Router from 'koa-router';
import jwtMiddleware from '../middlewares/jwt';
import { add, query, del } from "../controllers/crud";



const router = new Router();

router.prefix('/api');
router.use(jwtMiddleware);

// crud api
router.get('/crud', query);
router.post('/crud', add);
router.delete('/crud', del);


export default router;