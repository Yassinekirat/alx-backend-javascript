const fs = require('fs');

function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath, { encoding: 'utf8' }).split(/\r?\n/);
    let totalStudents = 0;
    const studentGroups = {};

    data.forEach((line, index) => {
      if (line.trim() !== '' && index > 0) {
        totalStudents += 1;
        const studentInfo = line.split(',');
        const firstName = studentInfo[0];
        const field = studentInfo[3];

        if (!studentGroups[field]) {
          studentGroups[field] = {
            total: 1,
            names: [firstName],
          };
        } else {
          studentGroups[field].total += 1;
          studentGroups[field].names.push(firstName);
        }
      }
    });

    console.log(`Number of students: ${totalStudents}`);
    Object.entries(studentGroups).forEach(([field, group]) => {
      console.log(`Number of students in ${field}: ${group.total}. List: ${group.names.join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
