function oscars(input) {
    let actor = input[0];
    let startPoints = Number(input[1]);
    let judges = Number(input[2]);

    for(let index = 3;index < input.length; index++) {

        let judgeName = input[index];
        index++
        let judgesPoint = Number(input[index]);
        let curJudjePoint = judgeName.length * judgesPoint / 2;

        startPoints += curJudjePoint;

        if (startPoints > 1250.5) {
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${startPoints.toFixed(1)}!`)
            break;
        }
    }
    if (startPoints <= 1250.5) {
        console.log(`Sorry, ${actor} you need ${(1250.5 - startPoints).toFixed(1)} more!`)
    }
}
oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])
