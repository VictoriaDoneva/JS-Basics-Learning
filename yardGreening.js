function yardgreen(input) {
    let squareM = Number(input[0]);
    let discount = squareM * 7.61 * 0.18;
    let finalPrice = squareM * 7.61 - discount;

    console.log(`The final price is: ${finalPrice} lv. 
    The discount is: ${discount} lv.`);
}

yardgreen("550")