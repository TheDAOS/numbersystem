const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
];

let nLen = numbers.length;

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
    }
}