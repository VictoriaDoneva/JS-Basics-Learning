function worldSwimmingRecord(input) {
    let recSec = Number(input[0]);
    let distMet = Number(input[1]);
    let timeSec = Number(input[2]);

    let totalTimeNeeded = distMet * timeSec;
    let delay = Math.floor(distMet / 15) * 12.5;

    let timeWithDelay = totalTimeNeeded + delay

    if(timeWithDelay < recSec){
        console.log(`Yes, he succeeded! The new world record is ${timeWithDelay.toFixed(2)} seconds.`)
    }else{
        console.log(`No, he failed! He was ${(timeWithDelay - recSec).toFixed(2)} seconds slower.`)
    }
}