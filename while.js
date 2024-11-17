function cinemaVoucher(input) {
    let vaucherAmount = Number(input[0]);
    let i = 1;
    let command = input[i];

    let ticketsCount = 0;
    let purchCount = 0;
    
    while (command !== "End") {

        let ticket = 0;
        let product = 0;

            
           if (command.length > 8) {
               ticket = Number(command.charCodeAt(0)) + Number(command.charCodeAt(1));
               vaucherAmount -= ticket;
               if (vaucherAmount >= 0) {
                   ticketsCount++;
                } 
                else{
                    break;
                }
            }
            else if (command.length <= 8 ) {
                product = Number(command.charCodeAt(0));
                vaucherAmount -= product;
                if (vaucherAmount >= 0) {
                    purchCount++;
                 } 
                 else{
                     break;
                 }
            }

            i++;
            command = input[i];
        }
       
        console.log(ticketsCount)
        console.log(purchCount)
    }
cinemaVoucher(["300",
"Captain Marvel",
"popcorn",
"Pepsi"])
        //        while (purchTotals < vaucherAmount)