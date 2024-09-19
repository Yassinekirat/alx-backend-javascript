const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;
const DB_FILE_PATH = process.argv.length > 2 ? process.argv[2] : '';

const parseStudentData = (filePath) => new Promise((resolve, reject) => {
  if (!filePath) {
    reject(new Error('Cannot load the database'));
  } else {
    fs.readFile(filePath, (err, content) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = content.toString('utf-8').trim().split('\n');
        const headers = lines[0].split(',');
        const fields = {};
        const studentHeaders = headers.slice(0, -1);

        lines.slice(1).forEach((line) => {
          const studentRecord = line.split(',');
          const field = studentRecord.pop(); // Get the last element as field
          if (!fields[field]) {
            fields[field] = [];
          }
          const student = Object.fromEntries(
            studentHeaders.map((header, index) => [header, studentRecord[index]]),
          );
          fields[field].push(student);
        });

        const totalStudents = Object.values(fields).flat().length;
        const report = [`Number of students: ${totalStudents}`];

        for (const [field, students] of Object.entries(fields)) {
          report.push(
            `Number of students in ${field}: ${students.length}. List: ${students.map((student) => student.firstname).join(', ')}`,
          );
        }
        resolve(report.join('\n'));
      }
    });
  }
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const responseLines = ['This is the list of our students'];

  parseStudentData(DB_FILE_PATH)
    .then((data) => {
      responseLines.push(data);
      const responseText = responseLines.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', Buffer.byteLength(responseText));
      res.status(200).send(responseText);
    })
    .catch((error) => {
      responseLines.push(error.message || error.toString());
      const responseText = responseLines.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', Buffer.byteLength(responseText));
      res.status(500).send(responseText);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
