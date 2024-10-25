function two(input) {
let tShirt = Number(input[0]);
let sumNeeded = Number(input[1]);

let bottoms = tShirt * 0.75;
let socks =  bottoms * 0.20;
let shoe = (tShirt + bottoms) * 2;

let sum = (tShirt + bottoms + socks + shoe) * 0.85;

if(sum >= sumNeeded) {
    console.log(`Yes, he will earn the world-cup replica ball!`)
    console.log(`His sum is ${sum.toFixed(2)} lv.`)
} else {
    console.log(`No, he will not earn the world-cup replica ball.`)
    console.log(`He needs ${(sumNeeded - sum).toFixed(2)} lv. more.`)
}
}
two(["55",
"310"])