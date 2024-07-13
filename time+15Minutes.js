function timeinMinutes(input) {
    
    let begHour = Number(input[0]);
    let begMinutes = Number(input[1]);
        
        let totalTime = begHour * 60 + begMinutes;
        let afterMinutes = totalTime + 15;
        let finalHour = Math.floor(afterMinutes / 60);
        let finalMinutes = afterMinutes % 60;

        if (finalHour >= 24) {
            finalHour -= 24;
        }
    
        if (finalMinutes < 10) {
            console.log(`${finalHour}:0${finalMinutes}`);
        } else {
            console.log(`${finalHour}:${finalMinutes}`)
        }
    }
timeinMinutes(["12","49"])