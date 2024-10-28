function five(input) {
let profit = 0;
let seaVacAvailable = Number(input[0]);
let mounVacAvailable = Number(input[1]);
let sum = seaVacAvailable + mounVacAvailable;

let i = 2;
let choice = input[i];

while (sum > 0 && choice !== `Stop`) {
    
    if ((choice === `sea`) && (seaVacAvailable > 0)) {
        profit += 680;
        seaVacAvailable--;
        
    } else if ((choice === `mountain`) && (mounVacAvailable > 0)){
        profit += 499;
            mounVacAvailable--;

    } 
    sum = seaVacAvailable + mounVacAvailable;
    
    i++;
    choice = input[i];
}
    if(sum === 0) {
        console.log(`Good job! Everything is sold.`)
        console.log(`Profit: ${profit} leva.`)
    } else {
        console.log(`Profit: ${profit} leva.`)
    }
}
five(["6",
"3",
"sea",
"mountain",
"mountain",
"mountain",
"sea",
"Stop"])