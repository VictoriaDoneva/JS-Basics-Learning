function maxNumber(input) {
 let n = input[0];
 let index = 1;
 let max = Number.MIN_SAFE_INTEGER;
while(n !== "Stop") {
let num = Number(n);
if (num > max) {
    max = num;
}
n = input[index];
index++;
}
console.log(max)
}
maxNumber(["-10",
"20",
"-30",
"Stop"])

