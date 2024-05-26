function cinemaTickets(input) {
    let i = 0;

    let command = input[i];
    i++;

    let studentTickets = 0;
    let standartTickets = 0; 
    let kidTickets = 0;

    while(command !== `Finish`) {
        let movieName = command;
        let availablePlaces = Number(input[i]);
        i++;

        let command1 = input[i];
        i++;

        let takenPlaces = 0;

        while (command1 !== `End`) {
            let ticketType = command1;
            takenPlaces++;

            if(ticketType === `student`) {
                studentTickets++;
            }else if (ticketType === `standard`) {
                standartTickets++;
            } else {
                kidTickets++;
            }

            if (takenPlaces === availablePlaces) {
                break;
            }
            command1 = input[i];
            i++;
        }

        let percentTaken = (takenPlaces / availablePlaces) * 100;
        console.log(`${movieName} - ${percentTaken.toFixed(2)}% full.`);

        command = input[i];
        i++;
    }
    let totalTickets = studentTickets + kidTickets + standartTickets;
    console.log(`Total tickets: ${totalTickets}`)

    let studentTicketsPercent = (studentTickets / totalTickets) * 100;
    let standardTicketsPercent = (standartTickets / totalTickets) * 100;
    let kidTicketsPercent = (kidTickets / totalTickets) * 100;

    console.log(`${studentTicketsPercent.toFixed(2)}% student tickets.`)
    console.log(`${standardTicketsPercent.toFixed(2)}% standard tickets.`)
    console.log(`${kidTicketsPercent.toFixed(2)}% kids tickets.`)

}
cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])
