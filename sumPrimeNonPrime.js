function sumPrimeNonPrime(input) {
    let i = 0;

    let command = input[i];
    i++;

    let sumPrime = 0;
    let sumNonPrime = 0;

    while (command !== `stop`) {
        let curNum = Number(command);

        if (curNum < 0) {
            console.log(`Number is negative.`);
            command = input[i];
            i++;
            continue;
        }

        let isPrime = true;

        for (let divider = 2; divider < curNum; divider++) {
            if (curNum % divider === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime === true) {
            sumPrime += curNum;
        } else {
            sumNonPrime += curNum;
        }
        
        command = input[i];
        i++;
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`)
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`)
}
sumPrimeNonPrime(["30",
"83",
"33",
"-1",
"20",
"stop"])
 