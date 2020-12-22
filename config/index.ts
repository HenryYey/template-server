import path from 'path'

export const mysql = {
  database: '',
  userName: '',
  password: '',
  options: {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    timezone: '+08:00',
    define: {
      // 字段以下划线（_）来分割（默认是驼峰命名风格）  
      'underscored': true,
      'charset': 'utf8',
      'collate': 'utf8_general_ci',
      'freezeTableName': true,
      'timestamps': true, //为模型添加 createdAt 和 updatedAt 两个时间戳字段
    }
  }
}

export const secret = "token";

export const publicDir = path.resolve(__dirname, './public');
export const logPath = path.resolve(__dirname, './logs');