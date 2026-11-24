const fs = require('fs');

async function countStudents(path) {
  let data;

  try {
    data = await fs.promises.readFile(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const students = data.split(/\r?\n/).slice(1).filter((line) => line.trim() !== '');
  const fields = {};

  for (const student of students) {
    const [firstname, , , field] = student.split(',');

    if (!fields[field]) {
      fields[field] = [];
    }

    fields[field].push(firstname);
  }

  console.log(`Number of students: ${students.length}`);

  for (const [field, names] of Object.entries(fields)) {
    console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
  }
}

module.exports = countStudents;
