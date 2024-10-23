function one(input) {
let perKal = Number(input[0]);
let perProt = Number(input[1]);
let perCarb = Number(input[2]);
let totalKal = Number(input[3]);
let perWat = Number(input[4]);

let k = (totalKal*perKal/100)/9;
let p = (totalKal*perProt/100)/4;
let c = (totalKal*perCarb/100)/4;

let foodW = k + p + c;

let kalPerG = totalKal / foodW;

let fin = kalPerG * (1 - perWat/100)
console.log(fin.toFixed(4))
}
one(["40",
"40",
"20",
"3000",
"40"])