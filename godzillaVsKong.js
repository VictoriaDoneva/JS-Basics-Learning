function godzillaVsKong(input) {
    let movieBudjet = Number(input[0]);
    let statNumber = Number(input[1]);
    let clothingPrice = Number(input[2]);

    let decorPrice = movieBudjet * 0.10;
    let totalClothing = statNumber * clothingPrice;
    
if (statNumber > 150) {
    totalClothing *= 0.90;
}

let moviePrice = decorPrice + totalClothing;

if (movieBudjet >= moviePrice) {
    console.log (`Action!`);
    console.log(`Wingard starts filming with ${(movieBudjet - moviePrice).toFixed(2)} leva left.`)
} else {
    console.log(`Not enough money!`);
    console.log(`Wingard needs ${(moviePrice - movieBudjet).toFixed(2)} leva more.`);
}
}

godzillaVsKong(["9587.88", "222", "55.68"])