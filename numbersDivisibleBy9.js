function numbersDivisibleBy9(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    sum = 0;
    let buff = "";

    for ( let i = a; i <= b; i++) {
        if (i % 9 === 0) {
        sum += i;
        buff += i + "\n";
       }
    }
    console.log(`The sum: ${sum}`);
    console.log(buff);
}

numbersDivisibleBy9(["100", "200"])