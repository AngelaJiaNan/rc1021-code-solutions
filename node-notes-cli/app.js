const fs = require('fs');
const data = require('./data');

if (process.argv[2] === 'read') {
  read();
} else if (process.argv[2] === 'create') {
  // node app.js create 'some new text for notes'
  // ['node', 'app.js', 'create', 'some new text for notes']
  create();
} else if (process.argv[2] === 'delete') {
  del();
} else if (process.argv[2] === 'update') {
  update();
}

function read() {
  for (const key in data.notes) {
    console.log(`${key}: ${data.notes[key]}`);
  }
}

function create() {
  const current = data;
  current.nextId++;
  current.notes[data.nextId] = process.argv[3];
  const updatedData = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', updatedData, err => {
    if (err) throw err;
  });
}

function update() {
  const current = data;
  current.notes[process.argv[3]] = process.argv[4];
  const updatedData = JSON.stringify(current);
  fs.writeFile('data.json', updatedData, err => {
    if (err) throw err;
  });
}

function del() {
  const current = data;
  delete current.notes[process.argv[3]];
  const updatedData = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', updatedData, err => {
    if (err) throw err;
  });

}
