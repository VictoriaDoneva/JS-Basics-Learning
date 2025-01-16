function coffeMachine(input) {
    let drink = input[0];
    let sugarChoise = input[1];
    let count = Number(input[2]);

    let price = 0;
    let esspreso = 0;
    let capuccino = 0;
    let tea = 0;

    if(sugarChoise === `Without`) {
        esspreso = 0.9 * 0.65;
        capuccino = 1 * 0.65;
        tea = 0.5 * 0.65;
    } else if(sugarChoise === `Normal`) {
        esspreso = 1;
        capuccino = 1.2;
        tea = 0.6;
    } else {
        esspreso = 1.2;
        capuccino = 1.6;
        tea = 0.7;
    }

    if (drink === "Espresso" && count >= 5) {
        price = count * esspreso * 0.75;
    } else if (drink === "Espresso" && count < 5) {
        price = count * esspreso
    } else if (drink === "Cappuccino") {
        price = count * capuccino;
    } else if (drink === "Tea") {
            price = count * tea;
    }
    if(price > 15) {
        price = price * 0.8;
    }

    console.log(`You bought ${count} cups of ${drink} for ${price.toFixed(2)} lv.`)
    
}
coffeMachine(["Cappuccino", "Normal", "13"])