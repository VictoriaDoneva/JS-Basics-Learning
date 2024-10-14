function vendingMachineCoins(input) {
    let change = Number(input[0]);
    let coins = Math.round(change * 100);
    let coinsReturnedCount = 0;

    while (coins > 0) {
        if (coins >= 200) {
            coinsReturnedCount++;
            coins -= 200;
        } else if (coins >= 100) {
            coinsReturnedCount++;
            coins -= 100;
        } else if (coins >= 50) {
            coinsReturnedCount++;
            coins -= 50;
        } else if (coins >= 20) {
            coinsReturnedCount++;
            coins -= 20;
        } else if (coins >= 10) {
            coinsReturnedCount++;
            coins -= 10;
        } else if (coins >= 5) {
            coinsReturnedCount++;
            coins -= 5;
        } else if (coins >= 2) {
            coinsReturnedCount++;
            coins -= 2;
        } else if (coins >= 1) {
            coinsReturnedCount++;
            coins -= 1;
        }
    }
    console.log(coinsReturnedCount);
}
vendingMachineCoins(["0.56"])