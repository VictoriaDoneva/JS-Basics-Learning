function vacation(input) {
let i = 0;

let moneyNeeded = Number(input[i]);
i++;

let moneyAvailable = Number(input[i]);
i++;

let action = input[i];
i++;

let sum = Number(input[i]);
i++;

let daysSpentCount = 0;
let totalDays = 0;

while (moneyAvailable < moneyNeeded) {
    totalDays++;

    if (action === `spend`) {
        if (sum > moneyAvailable) {
            moneyAvailable = 0;
        } else {
            moneyAvailable -= sum;
        }

        daysSpentCount++;
    
    } else {
        moneyAvailable += sum;
        daysSpentCount = 0;
    }
    if (daysSpentCount === 5) {
        console.log(`You can't save the money.`);
        console.log(`${totalDays}`);
        return;
    }

    action = input[i];
    i++;

    sum = Number(input[i]);
    i++;
}
console.log(`You saved the money for ${totalDays} days.`)
}
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])


