export default function createIteratorObject(report) {
  const iterator = [];
  for (const idx of Object.values(report.allEmployees)) {
    iterator.push(...idx);
  }
  return iterator;
}
