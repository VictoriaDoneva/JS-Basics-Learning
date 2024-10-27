function four(input) {
    let n = Number(input[0]);
    let newDay = Number(input[1]);
    
    let kilometers = newDay;

    for (let i = 2; i <= n + 1; i++){

        let percent = (Number(input[i]))/100;
        newDay = newDay * percent + newDay;

        kilometers += newDay

    }
    let check = Math.abs(1000 - kilometers);
    if (1000 < kilometers) {
        console.log(`You've done a great job running ${Math.ceil(check)} more kilometers!`)

    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(check)} more kilometers`)
    }
}
four(["4",
"100",
"30",
"50",
"60",
"80"])