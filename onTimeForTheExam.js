function onTimeForTheExam(input) {
    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMin = Number(input[3]);

    let examTime = examHour * 60 + examMin;
    let arrivalTime = arrivalHour * 60 + arrivalMin;
    let difference =  Math.abs(arrivalTime - examTime)
    let hours = Math.floor(difference / 60)
    let minutes = difference % 60

    if (arrivalTime > examTime) {
        console.log("Late");
        if (difference <= 59) {
            console.log(`${difference} minutes after the start`)
        } else {
            if (minutes < 10) {
            console.log(`${hours}:0${minutes} hours after the start`);
            } else {
            console.log(`${hours}:${minutes} hours after the start`);
            }
            
        }
    } else if (difference === 0 || difference <= 30) {
        if (difference === 0) {
            console.log("On time");
        } else {
            console.log("On time");
            console.log(`${minutes} minutes before the start`)
        }

    } else {
        console.log("Early");
        if (difference <= 59) {
        console.log(`${difference} minutes before the start`)
        } else {
        if (minutes < 10) {
        console.log(`${hours}:0${minutes} hours before the start`);
        } else {
        console.log(`${hours}:${minutes} hours before the start`);
        }
    }
}
}
onTimeForTheExam(["11",
"30",   
"10",
"55"])
