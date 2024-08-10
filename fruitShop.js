function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let price = 0;
    
/* плод	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
цена	2.50	1.20	0.85	1.45	    2.70	5.50	3.85
Събота и неделя магазинът работи на по-високи цени:
плод	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
цена	2.70	1.25	0.90	1.60	3.00	5.60	4.20
*/
if (day === "Monday" || day === "Tuesday" 
|| day === "Wednesday" || day === "Thursday" 
|| day === "Friday") {
    if (fruit === "banana") {
        price = quantity * 2.50;
        console.log((price).toFixed(2));
    } else if (fruit === "apple") {
        price = quantity * 1.20;
        console.log((price).toFixed(2));
    } else if (fruit === "orange") {
        price = quantity * 0.85;
        console.log((price).toFixed(2));
    } else if (fruit === "grapefruit") {
        price = quantity * 1.45;
        console.log((price).toFixed(2));
    } else if (fruit === "kiwi") {
        price = quantity * 2.70;
        console.log((price).toFixed(2));
    } else if (fruit === "pineapple") {
        price = quantity * 5.50;
        console.log((price).toFixed(2));
    } else if (fruit === "grapes") {
        price = quantity * 3.85;
        console.log((price).toFixed(2));
    } else if (!(fruit === "grapes") || !(fruit === "pineapple")
    || !(fruit === "kiwi") || !(fruit === "grapefruit")
    || !(fruit === "orange") || !(fruit === "apple")
    || !(fruit === "banana")) {
            console.log("error");       
} 

} else if (day === "Saturday" || day === "Sunday") {
    if (fruit === "banana") {
        price = quantity * 2.70;
        console.log((price).toFixed(2));
    } else if (fruit === "apple") {
        price = quantity * 1.25;
        console.log((price).toFixed(2));
    } else if (fruit === "orange") {
        price = quantity * 0.90;
        console.log((price).toFixed(2));
    } else if (fruit === "grapefruit") {
        price = quantity * 1.60;
        console.log((price).toFixed(2));
    } else if (fruit === "kiwi") {
        price = quantity * 3.00;
        console.log((price).toFixed(2));
    } else if (fruit === "pineapple") {
        price = quantity * 5.60;
        console.log((price).toFixed(2));
    } else if (fruit === "grapes") {
        price = quantity * 4.20;
        console.log((price).toFixed(2));
    } else if (!(fruit === "grapes") || !(fruit === "pineapple")
    || !(fruit === "kiwi") || !(fruit === "grapefruit")
    || !(fruit === "orange") || !(fruit === "apple")
    || !(fruit === "banana")) {
        console.log("error");
}
} else {
    console.log("error")
}
}

fruitShop(["orange",
"workday",
"3"])
