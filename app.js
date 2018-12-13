const express = require("express")

const usersRouter = require('./routes/users');

const app = express();

app.use('/users', usersRouter);

app.listen(3001, () => {
  console.log("server is running on http://localhost:3001");
});