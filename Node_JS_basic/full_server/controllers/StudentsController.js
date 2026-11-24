import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(request, response) {
    return readDatabase(process.argv[2])
      .then((fields) => {
        const output = ['This is the list of our students'];

        const majors = Object.keys(fields).sort(
          (a, b) => a.toLowerCase().localeCompare(b.toLowerCase()),
        );

        for (const major of majors) {
          const names = fields[major];
          output.push(`Number of students in ${major}: ${names.length}. List: ${names.join(', ')}`);
        }

        return response.status(200).send(output.join('\n'));
      })
      .catch(() => response.status(500).send('Cannot load the database'));
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      return response.status(500).send('Major parameter must be CS or SWE');
    }

    return readDatabase(process.argv[2])
      .then((fields) => {
        const names = fields[major] || [];
        return response.status(200).send(`List: ${names.join(', ')}`);
      })
      .catch(() => response.status(500).send('Cannot load the database'));
  }
}
