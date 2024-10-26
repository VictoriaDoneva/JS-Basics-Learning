function three(input) {
    let days = Number(input[0]) - 1;
    let place = input[1];
    let review = input[2];

    let room = 0;
    let discount = 0;

    if (review === "positive") {
        discount = 1.25;
        if (days < 10) {
            if (place === "room for one person") {
                room = 18;
            } else if (place === "apartment") {
                room = 25 * 0.70;
            } else if (place === "president apartment") {
                room = 35 * 0.90;
            }
        } else if (days >= 10 && days <= 15) {
            if (place === "room for one person") {
                room = 18;
            } else if (place === "apartment") {
                room = 25 * 0.65;
            } else if (place === "president apartment") {
                room = 35 * 0.85;
            }
        } else if (days > 15) {
            if (place === "room for one person") {
                room = 18;
            } else if (place === "apartment") {
                room = 25 * 0.50;
            } else if (place === "president apartment") {
                room = 35 * 0.80;
            }
        }
    } else if (review === "negative") {
        discount = 0.90
        if (days < 10) {
            if (place === "room for one person") {
                room = 18;
            } else if (place === "apartment") {
                room = 25 * 0.70;
            } else if (place === "president apartment") {
                room = 35 * 0.90;
            }
        } else if (days >= 10 && days <= 15) {
            if (place === "room for one person") {
                room = 18;
            } else if (place === "apartment") {
                room = 25 * 0.65;
            } else if (place === "president apartment") {
                room = 35 * 0.85;
            }
        } else if (days > 15) {
            if (place === "room for one person") {
                room = 18;
            } else if (place === "apartment") {
                room = 25 * 0.50;
            } else if (place === "president apartment") {
                room = 35 * 0.80;
            }
        }
    }
    let price = room * days * discount
    console.log(price.toFixed(2));
}
three(["30",
"president apartment",
"negative"])

