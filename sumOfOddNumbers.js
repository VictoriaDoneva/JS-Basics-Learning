function sumOfOddNumbers(n) {
    let sum = 0;

    for (let i = 1; i <= Number.MAX_SAFE_INTEGER; i += 2) {
        if (n === 0) {
            break;
        }
        console.log(i);
        sum += i;
        n--;
    }
    console.log(`Sum: ${sum}`)
}
sumOfOddNumbers(5)