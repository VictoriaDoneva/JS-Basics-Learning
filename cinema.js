function cinema(input) {
    let projection = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let price = 0;
    
    if (projection === "Premiere") {
        price = 12
    } else if (projection === "Normal") {
        price = 7.50;
    } else {
        price = 5;
    }
    let income = price * rows * columns;
    console.log(`${income.toFixed(2)} leva`);
}

cinema(["Premiere",
"10",
"12"])
