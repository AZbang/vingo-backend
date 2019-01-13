'use strict';

const cors = require('cors');
const express = require('express');

const app = express();
app.use(cors());
app.use(express.static('static'));

const PORT = process.env.PORT || 3000;

// API
const items = require('./static/hermitage_staff/items');
app.get('/api/stories', (req, res) => {
  const count = parseInt(req.query.count) || 5;
  const start = Math.floor(Math.random()*items.length+count)-count;
  const stories = items.slice(start, start+count);
  res.json(stories);
});


app.listen(PORT, () => {
  console.log(`Running on ${PORT} port`);
});
