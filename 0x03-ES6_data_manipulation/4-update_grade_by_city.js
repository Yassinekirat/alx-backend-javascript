export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      // Find the grade record for the current student
      const gradeRecord = newGrades.find((grade) => grade.studentId === student.id);

      // Determine the grade to assign (either from the record or 'N/A')
      const studentGrade = gradeRecord ? gradeRecord.grade : 'N/A';

      // Return the student object with the assigned grade
      return {
        ...student,
        grade: studentGrade,
      };
    });
}
