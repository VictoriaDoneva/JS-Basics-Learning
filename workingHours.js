function workingHours(input) {
    let hour = Number(input[0]);
    let day = input[1];

    if ((hour === 10 || hour === 11 || hour === 12 
        || hour === 13 || hour === 14 || hour === 15 || hour === 16 || hour === 17 
        || hour === 18)&& (day === "Monday" || day === "Tuesday" 
        || day === "Wednesday" || day === "Thursday" || day === "Friday" 
        || day === "Saturday")) {
        console.log("open");
} else {
    console.log("closed")
}
}

workingHours(["19", "Friday"])