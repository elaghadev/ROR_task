let numbers = [2, 1, 5, 4, 6, 9, 7, 8, 10];
function findMissingNumber(numbers) {
  let sum = 0;
  for (let x in numbers) {
    sum += numbers[x];
  }
  let n = numbers.length + 1;
  expectedSum = Math.floor((n * (n + 1)) / 2);
  console.log(expectedSum - sum); 
}
findMissingNumber(numbers);