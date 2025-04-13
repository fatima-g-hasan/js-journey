//Question 1:

const students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [70, 68, 72] },
  { name: "Charlie", scores: [100, 100, 100] },
];

function generateReports(students) {
  return students.map((student) => {
    const total = student.scores.reduce((sum, score) => sum + score, 0);
  });
}
