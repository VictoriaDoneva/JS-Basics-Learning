function oscarCeremony(input) {

let hallPrice = Number(input[0]);

let statuesPrice = hallPrice * 0.7;
let ceteringPrice = statuesPrice * 0.85;
let surroundingPrice = ceteringPrice * 0.5;

let expenses = hallPrice + statuesPrice + ceteringPrice + surroundingPrice;

console.log(expenses.toFixed(2))
}
oscarCeremony(["3500"])