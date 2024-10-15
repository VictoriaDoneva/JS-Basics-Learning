function examPreparation(input) {
let i = 0;

let maxBadGrades = Number(input[i]);
i++;
let problemName = input[i];
i++;
let problemGrade = Number(input[i]);
i++;

let maxBadGradesReached = false;
let badGrades = 0;
let gradesSum = 0;
let gradesCount = 0;
let lastProblem = ``;

while(problemName !== "Enough") {
    lastProblem = problemName;
    if (problemGrade <= 4) {
        badGrades++;
    }
    if (badGrades === maxBadGrades) {
        maxBadGradesReached = true;
        break;
    }
    
    gradesSum += problemGrade;
    gradesCount++;

    problemName =input[i];
    i++;

    problemGrade = Number(input[i]);
    i++;
}
if (maxBadGradesReached) {
    console.log(`You need a break, ${badGrades} poor grades.`)
} else {
    let avgGrade = gradesSum / gradesCount;
    console.log(`Average score: ${avgGrade.toFixed(2)}`);
    console.log(`Number of problems: ${gradesCount}`);
    console.log(`Last problem: ${lastProblem}`)
}
}
examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])
