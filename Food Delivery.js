function foodDelivery(input) {

    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veganMenu = Number(input[2]);
    let delivery = 2.50;

    let sumChM = chickenMenu * 10.35;
    let sumFiM = fishMenu * 12.40;
    let sumVeM = veganMenu * 8.15;
    let totalMenu = sumChM + sumFiM + sumVeM;
    let desertPrice = totalMenu * 0.20;
    let orderPrice = totalMenu + desertPrice + delivery;



    console.log(orderPrice);
}

foodDelivery(["2 ", "4 ", "3 "])