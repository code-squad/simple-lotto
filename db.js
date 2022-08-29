require("dotenv").config();

const mysql = require("mysql2/promise");
const { lotto } = require("./lotto.js");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PW,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

async function readLottoTable(pool) {
  const [rows, fields] = await pool.query("select * from lotto");
  console.log("Lotto Table Check ok");
}

(async function init(pool) {
  await readLottoTable(pool);
})(pool);

const mydb = {
  count: async function () {
    const [rows, fields] = await pool.query(
      "select count(*) as count from lotto"
    );
    console.log(`전부 ${rows[0].count} 개의 기록이 있습니다.`);
  },

  read: async function () {
    const [rows, fields] = await pool.query("select * from lotto");
    rows.forEach((row) => {
      console.log(
        `${row.id}번: "${row.message}", ${row.nums.nums}, ${row.created}`
      );
    });
  },
  add: async function (message) {
    const l = { nums: lotto() };
    await pool.execute("insert into lotto(message, nums) values (?, ?)", [
      message,
      l,
    ]);
  },
};

module.exports.mydb = mydb;
