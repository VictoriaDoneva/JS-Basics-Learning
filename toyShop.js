function toyShop(input) {
    let vacation = Number(input[0]);
    let nPuzzles = Number(input[1]);
    let nDolls = Number(input[2]);
    let nBears = Number(input[3]);
    let nMinions = Number(input[4]);
    let nTrucks = Number(input[5]);

    let puzzlePrice = nPuzzles * 2.6;
    let dollPrice = nDolls * 3;
    let bearPrice = nBears * 4.10;
    let minionPrice = nMinions * 8.20;
    let truckPrice = nTrucks * 2;

    let amount = puzzlePrice +dollPrice + bearPrice + minionPrice + truckPrice;
    let nToys = nPuzzles + nDolls + nBears + nMinions + nTrucks;

    if (nToys >= 50) {
        amount = amount * 0.75;
    }

    amount = amount * 0.90;

    if (amount >= vacation) {
        console.log(`Yes! ${(amount - vacation).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(vacation - amount).toFixed(2)} lv needed.`)
    }
}

toyShop(["320", "8", "2", "5", "5","1"])