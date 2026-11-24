import fs from 'fs';

export default function readDatabase(filePath) {
  return fs.promises.readFile(filePath, 'utf8')
    .then((data) => {
      const students = data.split(/\r?\n/).slice(1).filter((line) => line.trim() !== '');
      const fields = {};

      for (const student of students) {
        const [firstname, , , field] = student.split(',');

        if (!fields[field]) {
          fields[field] = [];
        }

        fields[field].push(firstname);
      }

      return fields;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}
