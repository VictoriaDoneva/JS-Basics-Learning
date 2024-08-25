    function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishmans = Number(input[2]);

    let money = 0;

    switch (season) {
        case "Spring":
            if (fishmans <= 6) {
                money = 3000 * 0.9;
            } else if (fishmans >= 7 && fishmans <= 11) {
                money = 3000 * 0.85;
            } else if (fishmans >= 12) {
                money = 3000 * 0.75;
            }
            break;
        case "Summer":
            if (fishmans <= 6) {
                money = 4200 * 0.9;
            } else if (fishmans >= 7 && fishmans <= 11) {
                money = 4200 * 0.85;
            } else if (fishmans >= 12) {
                money = 4200 * 0.75;
            }
            break;
        case "Autumn":
            if (fishmans <= 6) {
                money = 4200 * 0.9;
            } else if (fishmans >= 7 && fishmans <= 11) {
                money = 4200 * 0.85;
            } else if (fishmans >= 12) {
                money = 4200 * 0.75;
            }
            break;
        case "Winter":
            if (fishmans <= 6) {
            money = 2600 * 0.9;
            } else if (fishmans >= 7 && fishmans <= 11) {
            money = 2600 * 0.85;
            } else if (fishmans >= 12) {
            money = 2600 * 0.75;
            }
            break;
        }
        if (fishmans % 2 === 0 && season !== "Autumn") {
            money = money * 0.95;
        }
            let difference = Math.abs(budget - money);
        if (budget >= money) {
            console.log(`Yes! You have ${difference.toFixed(2)} leva left.`)
        } else {
            console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`);
            }
        }
fishingBoat(["3600",
"Autumn",
"6"])