function suppliesForSchool(input) {
    let penPacs = Number(input[0]);
    let markerPacs = Number(input[1]);
    let leatersCleaningSpray = Number(input[2]);
    let discount = Number(input[3]);
    let penPrice = penPacs * 5.80;
    let markerPrice = markerPacs * 7.20;
    let sprayPrice = leatersCleaningSpray * 1.2
    let total = penPrice + markerPrice + sprayPrice;
    discountedAmount = total - total * discount/100;

    console.log(discountedAmount)
}

suppliesForSchool(["2", "3", "4", "25"])