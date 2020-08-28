import { INTEGER, STRING } from 'sequelize';
import sequelize from './db';

const UserModel = sequelize.define('user', {
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userName: STRING,
  password: STRING
}, {
  freezeTableName: true
});

// 若表不存在则创建
// UserModel.sync()

export default UserModel;