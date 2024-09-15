function cleverLily(input) {

    let lilisAge = Number(input[0]);
    let machinePr = Number(input[1]);
    let toyPr = Number(input[2]);

    let savedMoney = 0;
    let moneyGiven = 10;
    
    for(let currBday = 1; currBday <= lilisAge; currBday++) {
        if (currBday % 2 === 0) {
            savedMoney += (moneyGiven - 1);
            moneyGiven += 10;
        } else {
            savedMoney += toyPr;
        }
    }


if(savedMoney >= machinePr) {
    console.log(`Yes! ${(savedMoney - machinePr).toFixed(2)}`)
}else{
    console.log(`No! ${(machinePr - savedMoney).toFixed(2)}`)
}
}
cleverLily(["10",
"170.00",
"6"])

