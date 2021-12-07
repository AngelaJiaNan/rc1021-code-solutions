const express = require('express');
const app = express();
const fs = require('fs');
const data = require('./data');

app.get('/api/notes', (req, res) => {
  const notesarray = [];
  for (const id in data.notes) {
    notesarray.push(data.notes[id]);
  }
  res.json(notesarray);
});

app.get('/api/notes/:id', (req, res) => {
  const numberid = Number(req.params.id);
  if (!Number.isInteger(numberid) || numberid <= 0) {
    const errormsg = {
      error: 'id must be a positive integer'
    };
    res.status(404).json(errormsg);
  } else if (!data.notes[numberid]) {
    const noidmsg = {
      error: `cannot find note with id ${numberid}`
    };
    res.status(404).json(noidmsg);
  } else {
    res.json(data.notes[numberid]);
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  const body = req.body;
  const newNote = {};
  if (!body.content) {
    const contentReqMsg = {
      error: 'content is required field'
    };
    res.status(400).json(contentReqMsg);
  } else {
    newNote.id = data.nextId;
    newNote.content = body.content;
    data.notes[newNote.id] = newNote;
    data.nextId++;
    const updatedData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', updatedData, err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occured' });
      } else {
        res.status(201).json(newNote);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const { notes } = data;
  const deleteId = Number(req.params.id);
  if (!Number.isInteger(deleteId) || deleteId <= 0) {
    res.status(400).json({ error: 'id must be a postive integer' });
  } else if (!notes[deleteId]) {
    res.status(404).json({ error: `cannot find note at id ${deleteId}` });
  } else {
    delete notes[req.params.id];
    const updatedData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', updatedData, err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occured' });
      } else {
        res.status(204).json({});
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const { notes } = data;
  const { content } = req.body;
  const updatedId = Number(req.params.id);
  if (!Number.isInteger(updatedId) || updatedId <= 0) {
    res.status(400).json({ error: 'id must be a postive integer' });
  } else if (Number.isInteger(updatedId) && (!content)) {
    res.status(400).json({ error: 'content field is required' });
  } else if (!notes[updatedId]) {
    res.status(404).json({ error: `cannot find note with id ${updatedId}` });
  }
  notes[updatedId].content = content;
  const updatedData = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', updatedData, err => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured' });
    } else {
      res.status(200).json(data.notes[updatedId]);
    }
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
