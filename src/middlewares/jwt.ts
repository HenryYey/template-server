/**
 * jwt中间件
 */

import koaJwt from 'koa-jwt';
import { verify } from 'jsonwebtoken';
import { secret } from '../../config';
import * as Koa from "koa";

export const jwtMiddleware = koaJwt({ secret });

export default function (ctx: Koa.ParameterizedContext<Koa.DefaultState, Koa.DefaultContext>, next: Koa.Next): Koa.Middleware {
  // 将 token 中的数据解密后存到 ctx 中
  if (typeof ctx.request.headers.authorization === 'string') {
    const token = ctx.request.headers.authorization.slice(7);
    ctx.jwtData = verify(token, secret);
  }
  return jwtMiddleware(ctx, next);
}