export default function getStudentIdsSum(student) {
  return student.reduce((accumulator, student) => accumulator + student.id, 0);
}
