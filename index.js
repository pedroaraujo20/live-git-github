const express = require('express');

const app = express();

app.length('/teste', (req, res) => {
  return res.json({ hello: 'world 2' })
});

app.listen(3333);