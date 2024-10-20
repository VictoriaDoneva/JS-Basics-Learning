function walking(input) {
let i = 0;
let stepsGoal = 10000;
let totalSteps = 0;

let curSteps = input[i];
i++;

while (curSteps !== "Going home") {
    curSteps = Number(curSteps);

    totalSteps += curSteps;

    if (totalSteps >= stepsGoal) {
        break;
    }

    curSteps = input[i];
    i++;
    }

    if (curSteps === `Going home`) {
    let stepsToHome = Number(input[i]);
    i++;
    totalSteps += stepsToHome;

    if (totalSteps >= stepsGoal) {
        console.log(`Goal reached! Good job!`);
        console.log(`${totalSteps - stepsGoal} steps over the goal!`)
        } else {
        console.log(`${stepsGoal - totalSteps} more steps to reach goal.`)
        }
    } else {
    console.log(`Goal reached! Good job!`);
    console.log(`${totalSteps - stepsGoal} steps over the goal!`)
    }
}
walking(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])