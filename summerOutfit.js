function summerOutfit(input) {
    let degreece = Number(input[0]);
    let time = input[1];

    let outfit = "";
    let shoes = "";
    
    if ((10 <= degreece && degreece <= 18) && time === "Morning") {
        outfit = "Sweatshirt";
        shoes = "Sneakers";
 
    } else if (time === "Evening" || (time === "Afternoon" && (10 <= degreece && degreece <= 18)) || (time === "Morning" && (18 < degreece && degreece <= 24))) {
        outfit = "Shirt";
        shoes = "Moccasins";

    } else if ((time === "Morning" && degreece >= 25) || (time === "Afternoon" && (18 < degreece && degreece <= 24))) {
        outfit = "T-Shirt";
        shoes = "Sandals";
    } else {
        outfit = "Swim Suit"
        shoes = "Barefoot"

    }
    console.log(`It's ${degreece} degrees, get your ${outfit} and ${shoes}.`)
}

summerOutfit(["28",
"Evening"])
