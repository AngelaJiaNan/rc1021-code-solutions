const express = require('express');
const app = express();
let nextId = 1;
const grades = {};

app.get('/api/grades', function (req, res) {
  const arrayGrades = [];
  for (const key in grades) {
    arrayGrades.push(grades[key]);
  }
  res.json(arrayGrades);
});

const jsonMiddleware = express.json();

app.use(jsonMiddleware);

app.post('/api/grades', function (req, res) {
  const data = req.body;
  const id = nextId;
  data.id = id;
  grades[id] = data;
  nextId++;
  res.status(201).json(data);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
