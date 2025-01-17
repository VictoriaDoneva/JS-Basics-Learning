function easteLunch(input) {
let cakeN = Number(input[0]);
let eggN = Number(input[1]);
let cookieN = Number(input[2]);

let total = cakeN * 3.20 + eggN * 4.35 + cookieN * 5.40 + eggN * 12 * 0.15
console.log(total.toFixed(2))
}
easteLunch(["3", "2", "3"])