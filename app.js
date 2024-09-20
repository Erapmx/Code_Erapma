const express = require('express');
const app = express();
const PORT = 3000;

const data = require('./data.json');


app.get('/api/users', (req, res) => {
  res.json(data.users);
});

app.get('/api/products', (req, res) => {
  res.json(data.products);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
