function petShop(input) {
    let dogPacs = Number (input[0]);
    let catPacs = Number (input[1]);
    let total = dogPacs * 2.5 + catPacs * 4;
    console.log(`${total} lv.`)


}
petShop(["5", "4"])