function depositCalculator(input) {
    let deposit = Number(input[0]);
    let period = Number(input[1]);
    let air = Number(input[2]);
    let sum = deposit + period * deposit/100 * air / 12;
    console.log(sum)
}

depositCalculator(["200", "3", "0.057"])