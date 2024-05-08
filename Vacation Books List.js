function booksList(input) {
    let bookPages = Number(input[0]);
    let pagesPerH = Number(input[1]);
    let numberOfDays = Number(input[2]);
    let totalTime = bookPages / pagesPerH;
    let hoursPerDay = totalTime / numberOfDays;
        console.log(hoursPerDay)
}

booksList(["212", "20", "2"])