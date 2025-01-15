function agencyProfit (input) {
    let avio = input[0];
    let adultTicketCount = Number(input[1]);
    let kidsTicketCount = Number(input[2]);
    let netPrAdult = Number(input[3]);
    let servicePr = Number(input[4]);

    let newPrA = netPrAdult + servicePr;
    let newPrK = (netPrAdult * 0.30) + servicePr
    let sum = (adultTicketCount * newPrA + newPrK * kidsTicketCount) * 0.20;
    console.log(`The profit of your agency from ${avio} tickets is ${sum.toFixed(2)} lv.`)
}
agencyProfit(["WizzAir", "15", "5", "120", "40"])