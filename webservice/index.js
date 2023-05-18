const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('This is my First Web Service Application using Express JS')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});