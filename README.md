# Odd or Even & Prime Numbers

This repo has ansers to two qustions asked in a test

Q1:   
write a JavaScript code that prints even and odd numbers from the given random array

ans : 
```
const numbers = [
    3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18,
];
  
for (let i = 0; i<numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        console.log(numbers[i], "Even");
    } else {
        console.log(numbers[i], "Odd");
    }
}
```
Output:
```
3 Odd
7 Odd
2 Even
15 Odd
9 Odd
20 Even
5 Odd
14 Even
12 Even
1 Odd
8 Even
11 Odd
6 Even
19 Odd
4 Even
10 Even
17 Odd
13 Odd
16 Even
18 Even
```

Q2:   
write a JavaScript code that finds all the prime numbers from the given array and Calculate Maximum, Minimum, and Sum of those Prime numbers
```
const numbers = [
  19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
];

let nLen = numbers.length;

let primeArray = [];

for (let i = 0; i < nLen; i++) {
  
  let jLimit = numbers[i]/2;
  if (numbers[i] % 2 != 0) {
    let jLimit = (numbers[i] + 1)/2;
  }
  
  let primeNo = true;
  
  for (let j = 2; j <= jLimit; j++) {
    if (numbers[i] % j == 0) {
      primeNo = false;
    }
  }
  
  if (primeNo) {
    console.log(numbers[i], "is Prime number");
    primeArray.push(numbers[i]);
  }
}


let min = primeArray[0];
let max = primeArray[0];
let sum = 0;

for (let i = 0; i < primeArray.length; i++) {
  if (primeArray[i] > max) {
    max = primeArray[i];
  }
  
  if (primeArray[i] < min) {
    min = primeArray[i];
  }
  
  sum += primeArray[i];
}

console.log("\n\n");
console.log("Maximum: ", max);
console.log("Minimum: ", min);
console.log("Sum: ", sum);
```
Output:
```
19 is Prime number
23 is Prime number
13 is Prime number
31 is Prime number
29 is Prime number
2 is Prime number
11 is Prime number
17 is Prime number
5 is Prime number



Maximum:  31
Minimum:  2
Sum:  150
```