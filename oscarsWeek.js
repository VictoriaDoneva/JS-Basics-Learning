function oscarsWeek(input) {
let movieName = input[0];
let hallType = input[1];
let ticketsBought = Number(input[2]);

let ticketPr = 0;

if (hallType === `normal`) {
    if (movieName === `A Star Is Born`) {
        ticketPr = 7.50;
    } else if (movieName === `Bohemian Rhapsody`){
        ticketPr = 7.35;
    } else if (movieName === `Green Book`){
        ticketPr = 8.15;
    } else {
        ticketPr = 8.75;
    }

} else if (hallType === `luxury`) {
    if (movieName === `A Star Is Born`) {
        ticketPr = 10.50;
    } else if (movieName === `Bohemian Rhapsody`){
        ticketPr = 9.45;
    } else if (movieName === `Green Book`){
        ticketPr = 10.25;
    } else {
        ticketPr = 11.55;
    }

} else {
    if (movieName === `A Star Is Born`) {
        ticketPr = 13.50;
    } else if (movieName === `Bohemian Rhapsody`){
        ticketPr = 12.75;
    } else if (movieName === `Green Book`){
        ticketPr = 13.25;
    } else {
        ticketPr = 13.95;
    }

}
let income = ticketPr * ticketsBought;
console.log(`${movieName} -> ${income.toFixed(2)} lv.`)
}
oscarsWeek(["Green Book", "normal", "63"])