function trainTheTrainers(input) {
let i = 0;
let judgeCount = Number(input[i]);
i++;

let command = input[i];
i++

let totalGradeSum = 0;
let totalGradeCount = 0;

    while (command !== `Finish`) {
        let gradesSum = 0;
        let presentationName = command;

        for (let ind = 0; ind < judgeCount; ind++) {
        let curGrade = Number(input[i]);
        i++;

        gradesSum += curGrade;
        }

        let averageGrade = gradesSum / judgeCount
        console.log(`${presentationName} - ${averageGrade.toFixed(2)}.`);

        totalGradeSum += averageGrade;
        totalGradeCount++;

        command = input[i];
        i++;

    }
    let finalAvGrade = totalGradeSum / totalGradeCount;
    console.log(`Student's final assessment is ${finalAvGrade.toFixed(2)}.`)
}

trainTheTrainers(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])
