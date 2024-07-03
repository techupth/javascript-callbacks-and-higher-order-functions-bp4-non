//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let count = 0;
  
  for (let score of array) {
    if (score > 70) {
      count++;
      if (count >= 5) {
        return operation === 'pass' ? '✅' : '❌';
      }
    }
}
return operation === 'pass' ? '❌' : '✅';
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, 'pass');
let scoreRoom2Result = atLeastFive(studentScoresRoom2, 'pass');
let scoreRoom3Result = atLeastFive(studentScoresRoom3, 'pass');

console.log(`นักเรียนห้องที่ 1 ผ่านเกณฑ์ ${scoreRoom1Result}`);
console.log(`นักเรียนห้องที่ 2 ผ่านเกณฑ์ ${scoreRoom2Result}`);
console.log(`นักเรียนห้องที่ 3 ผ่านเกณฑ์ ${scoreRoom3Result}`);