const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const studentLines = data.split('\n');
      let studentCount = 0;
      let outputMessage = '';
      const groupByField = {};

      const processLines = () => {
        studentLines.forEach((line, index) => {
          if (line.trim() && index > 0) {
            studentCount += 1;
            const [firstName, , , field] = line.split(',');

            if (!groupByField[field]) {
              groupByField[field] = {
                total: 1,
                studentList: [firstName],
              };
            } else {
              groupByField[field].total += 1;
              groupByField[field].studentList.push(firstName);
            }
          }
        });
      };

      const displayResults = () => {
        processLines();
        console.log(`Number of students: ${studentCount}`);
        outputMessage += `Number of students: ${studentCount}\n`;

        Object.entries(groupByField).forEach(([field, group]) => {
          const { total, studentList } = group;
          console.log(`Number of students in ${field}: ${total}. List: ${studentList.join(', ')}`);
          outputMessage += `Number of students in ${field}: ${total}. List: ${studentList.join(', ')}\n`;
        });

        outputMessage = outputMessage.trim();
      };

      displayResults();
      resolve(outputMessage);
    });
  });
}

module.exports = countStudents;
