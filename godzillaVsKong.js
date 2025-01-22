function godzillaVsKong(input) {
    let movieBudget = Number(input[0]);
    let countStats = Number(input[1]);
    let suitPerOneStat = Number(input[2]);

    let decor =  movieBudget * 0.10;
    
    if (countStats > 150) {
        suitPerOneStat = suitPerOneStat * 0.90;
    }

    let budgetCheck = countStats * suitPerOneStat + decor;

    if (movieBudget >= budgetCheck) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(movieBudget - budgetCheck).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(budgetCheck - movieBudget).toFixed(2)} leva more.`);
    }
}
godzillaVsKong(["9587.88",
"222",
"55.68"])