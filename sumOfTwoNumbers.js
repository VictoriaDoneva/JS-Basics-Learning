function sumOfTwoNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let magic = Number(input[2]);

    let counter = 0;

    let bully = false;

    for (let add1 = n1; add1 <= n2; add1++) {
        for(let add2 = n1; add2 <= n2; add2++){
            counter++
            if (add1 + add2 === magic) {
                console.log(`Combination N:${counter} (${add1} + ${add2} = ${magic})`);
                bully = true;
                break;
            }
        }
        if(bully) {
            break;
        }
    }
    if(bully === false) {
        console.log(`${counter} combinations - neither equals ${magic}`)
    }
}
sumOfTwoNumbers(["88",
"888",
"1000"])
