const { urlencoded, json } = require("express");
const express = require("express");
const app = express();
const router = require('./src/routes/index')
// Untuk db dan uuid akan digunakan di model
const db = require("./helper/connection");
const { v4: uuidv4 } = require('uuid');

// defaultnya express js itu ga menerima semua jenis form.
// use() middleware urlencoded, json
// menerima application/x-www-form-urlencoded
app.use(urlencoded({ extended: true }));
// menerima json
app.use(json());
// menambahkan route (prefix, nama router)
app.use('/api/v1/', router)

app.get("*", (req, res) => {
  return res.send({
    status: 404,
    message: "NOT FOUND!",
  });
});

const port = 3000;
app.listen(port, (req, res) => {
  console.log(`Server successfully running on port ${port}`);
});
