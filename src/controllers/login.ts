/**
 * 模板语句，按实际需求修改
 */

import jwt from 'jsonwebtoken';
import User from '../models/user';
import { secret } from '../../config/index';

export const login = async (ctx, next) => {
  const {
    userName,
    password
  } = ctx.request.body;

  await User.findAll({
    where: {
      userName,
      password
    }
  });

  ctx.log.info(`user: ${userName}, token: ${password}`);
  
  ctx.result = {
    token: jwt.sign({
      userName: userName,
      password: password
    }, secret)
  };

  return next();
};