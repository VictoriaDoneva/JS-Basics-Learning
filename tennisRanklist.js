function tennisRanklist(input) {
    let tournaments = Number(input[0]);
    let initialPoints = Number(input[1]);
    
    let wonPoints = 0;
    let winsCount = 0;
    for (let i = 2; i < tournaments + 2; i++) {
        let result = input[i];

        if (result === `W`) {
            wonPoints += 2000;
            winsCount++;
        } else if (result === `F`) {
            wonPoints += 1200;
        } else if (result === `SF`) {
            wonPoints += 720;
        }
    }
    let totalPoint = initialPoints + wonPoints;
    let averagePoints = Math.floor(wonPoints/ tournaments);
    let percentWon = (winsCount / tournaments) * 100;

    console.log(`Final points: ${totalPoint}`)
    console.log(`Average points: ${averagePoints}`);
    console.log(`${percentWon.toFixed(2)}%`);
}
tennisRanklist(["4",
"750",
"SF",
"W",
"SF",
"W"])

