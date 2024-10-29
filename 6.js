function six(input) {
    let n = input[0];

    let n1 = Number(n[2]);
    let n2 = Number(n[1]);
    let n3 = Number(n[0]);

    for (let x = 1; x <= n1; x++) {
        for (y = 1; y <= n2; y++) {
            for (z = 1; z <= n3; z++) {
                console.log((`${x} * ${y} * ${z} = ${x * y * z};`))
            }
        }
    }
}
six(["324"])