const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  res.type('text/plain').send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const output = ['This is the list of our students'];

  try {
    const data = await fs.promises.readFile(process.argv[2], 'utf8');
    const students = data.split(/\r?\n/).slice(1).filter((line) => line.trim() !== '');
    const fields = {};

    output.push(`Number of students: ${students.length}`);

    for (const student of students) {
      const [firstname, , , field] = student.split(',');

      if (!fields[field]) {
        fields[field] = [];
      }

      fields[field].push(firstname);
    }

    for (const [field, names] of Object.entries(fields)) {
      output.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    output.push('Cannot load the database');
  }

  res.type('text/plain').send(output.join('\n'));
});

app.listen(1245);

module.exports = app;
