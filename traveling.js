function traveling(input) {
    let i = 0;
    let beg = input[i];

    while (beg !== "End") {
        let destination = beg;
        i++;
        let minBudget = Number(input[i]);
        let depTotals = 0;
        while (depTotals < minBudget) {
        i++;
        let deposit = Number(input[i]);
        depTotals += deposit;
        }
        
        console.log(`Going to ${destination}!`)
        i++;
        beg = input[i];
    }
}
traveling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])
