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