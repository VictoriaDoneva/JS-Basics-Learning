function sumOfNumbers(input) {
    let n = String(input[0]);
    let sum = 0;

    for (let i = 0; i < n.length; i ++) {
    let ch = Number(n[i]);
    sum = sum + ch;
    }
    console.log(`The sum of the digits is:${sum}`)
}
sumOfNumbers(["1234"])