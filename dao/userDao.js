const mysql = require("mysql");
const dbConfig = require("../config/db");
const sql = require("./userSqlMapping");

const pool = mysql.createPool(dbConfig);

module.exports = {
  add: (req, res) => {
    pool.getConnection((err, connection) => {
      if (err) throw err;
      const param = req.query;

      connection.query(sql.insert, [param.name, param.age], (err, result) => {
        if (err) throw err;
        if (result) {
          result = {
            code: 200,
            msg: "insert successful!",
            data: param
          };
        }
        res.json(result);
        connection.release();
      });
    });
  },
};
