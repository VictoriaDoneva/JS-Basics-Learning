function tradeCommissions(input) {
    let town = input[0];
    let sells = Number(input[1]);

    let commision = 0;

    switch (town) {
        case "Sofia":
            if (sells <= 500 && 0 <= sells) {
                commision = sells * 0.05;
            } else if ( sells <= 1000 && 500 < sells) {
                commision = sells * 0.07;
            } else if (sells <= 10000 && 1000 < sells) {
                commision = sells * 0.08;
            } else if (sells > 10000) {
                commision = sells * 0.12;
            }
            break;
        case "Varna":
            if (sells <= 500 && 0 <= sells) {
                commision = sells * 0.045;
            } else if ( sells <= 1000 && 500 < sells) {
                commision = sells * 0.075;
            } else if (sells <= 10000 && 1000 < sells) {
                commision = sells * 0.1;
            } else if (sells > 10000) {
                commision = sells * 0.13;
            }
                break;
        case "Plovdiv":
            if (sells <= 500 && 0 <= sells) {
            commision = sells * 0.055;
        } else if ( sells <= 1000 && 500 < sells) {
            commision = sells * 0.08;
        } else if (sells <= 10000 && 1000 < sells) {
            commision = sells * 0.12;
        } else if (sells > 10000) {
            commision = sells * 0.145;
        }
        break;
    }

if (sells >= 0 && (town === "Sofia" || town === "Plovdiv" || town === "Varna")) {
    console.log(commision.toFixed(2));
} else {
    console.log("error"); 
}
}