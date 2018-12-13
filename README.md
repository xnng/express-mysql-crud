- 数据库

```sql
CREATE DATABASE test DEFAULT CHARACTER SET utf8;
USE test;
CREATE TABLE user
(
  id   INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(40),
  age  VARCHAR(40)
)
```

- 启动项目

```bash
$ yarn
$ yarn start
```

- 测试

浏览器访问：http://localhost:3001/users/adduser?name=xnng&age=22