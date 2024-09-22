function histogram(input) {
    let nCount = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for(let index = 1; index <=nCount; index++) {
        let nCurrent = Number(input[index]);

        if (nCurrent < 200) {
            p1++;
        } else if (nCurrent <= 399) {
            p2++;
        } else if (nCurrent <= 599) {
            p3++;
        } else if (nCurrent <= 799) {
            p4++;
        } else {
            p5++;
        }
    }
    console.log(`${(p1/nCount*100).toFixed(2)}%`)
    console.log(`${(p2/nCount*100).toFixed(2)}%`)
    console.log(`${(p3/nCount*100).toFixed(2)}%`)
    console.log(`${(p4/nCount*100).toFixed(2)}%`)
    console.log(`${(p5/nCount*100).toFixed(2)}%`)
}
histogram(["9",
"367", 
"99", 
"200", 
"799",
"999",
"333",
"555",
"111",
"9"])
