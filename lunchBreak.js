function lunchBreak(input){
    let seriesName = (input[0]);
    let epDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let timeForLunch = breakDuration * 1/8;
    let restTime = breakDuration * 1/4;
    let timeLeft =  breakDuration - timeForLunch - restTime

    if(timeLeft >= epDuration){
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(timeLeft - epDuration)} minutes free time.`)
    }else{
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(epDuration - timeLeft)} more minutes.`)
    }

}

lunchBreak(["Teen Wolf","48","60"])

