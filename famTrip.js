function famTrip(input) {
    let begBudget = Number(input[0]);
    let nights = Number(input[1]);
    let prPerNight = Number(input[2]);
    let extraExpense = Number(input[3]);
    
    let percantage = extraExpense / 100;

    if (nights > 7) {
        prPerNight = prPerNight * 0.95
    }

    let sum = Math.abs(begBudget - nights * prPerNight - begBudget * percantage);
    if (sum < begBudget) {
    console.log(`Ivanovi will be left with ${sum} leva after vacation.`)
    } else {
        console.log(`${sum} leva needed."`)
    } 
}
famTrip(["800.50", "8", "100", "2"])