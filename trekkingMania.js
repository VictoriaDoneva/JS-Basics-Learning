function trekkingMania(input) {
let groups = Number(input[0]);

let musala = 0;
let monblan = 0;
let kilimajaro = 0;
let k2 = 0;
let everest = 0;

for (let index = 1; index <= groups; index++) {
    let curGroup = Number(input[index]);

    if (curGroup <= 5) {
        musala+= curGroup;
    } else if (curGroup <= 12) {
        monblan+= curGroup;
    } else if (curGroup <= 25) {
        kilimajaro+= curGroup;
    } else if (curGroup <= 40) {
        k2+= curGroup;
    } else {
        everest+= curGroup;
    }
}
let total = musala + monblan + kilimajaro + k2 + everest;

console.log(`${(musala/total*100).toFixed(2)}%`)
console.log(`${(monblan/total*100).toFixed(2)}%`)
console.log(`${(kilimajaro/total*100).toFixed(2)}%`)
console.log(`${(k2/total*100).toFixed(2)}%`)
console.log(`${(everest/total*100).toFixed(2)}%`)
}
trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
