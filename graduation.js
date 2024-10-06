function graduation(input) {
    let i = 0;
    let name = input[i];
    i++;
    let year = 1;
    let sumGrade = 0;
    let examFailed = 0;
    let expailed = false;

    while(year <= 12) {
        let currentGrade = Number(input[i]);
        i++;
        if(currentGrade < 4) {
            examFailed++;
            if(examFailed === 2) {
                expailed = true;
                break;
            }
            continue;
        }
        sumGrade = sumGrade + currentGrade;
        year++;
    }
    if (expailed == false) {
    let average = sumGrade / 12;
    console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`)
    } else {
        console.log(`${name} has been excluded at ${year} grade"`)
    }

}

graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
