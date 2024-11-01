function cinemaVoucher(input) {
    let vaucherAmount = Number(input[0]);
    
    let ticketsCount = 0;
    let purchCount = 0;
    let command = "";

    for (let i = 1; i < input.length; i++) {
        command = input[i];
        let product = 0;
        let ticket = 0;

        if(command === 'End') {
            break;
        }

        if (command.length > 8) {
            ticketsCount++;
            ticket = Number(command.charCodeAt(0)) + Number(command.charCodeAt(1));
        } 
        vaucherAmount -= ticket;

        if (command.length <= 8) {
            purchCount++;
            product = Number(command.charCodeAt(1));
        }
        vaucherAmount -=product


        
    } 
    console.log(`${ticketsCount}`)
    console.log(`${purchCount}`)
}
    cinemaVoucher(["1500",
        "Avengers: Endgame",
        "Bohemian Rhapsody",
        "Deadpool 2",
        "End"])