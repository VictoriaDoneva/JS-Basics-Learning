function cake(input) {
    let i = 0;
    let width = Number(input[i]);
    i++;

    let length = Number(input[i]);
    i++;

    let totalPieces = width * length;
    let piecesTaken = input[i]
    i++;

    while (piecesTaken !== `STOP`) {
        piecesTaken = Number(piecesTaken);
        totalPieces -= piecesTaken;

        if (totalPieces <= 0) {
            break;
        }

        piecesTaken = input[i];
        i++;

    }

    if (piecesTaken === `STOP`) {
        console.log(`${totalPieces} pieces are left.`)
    } else {
        console.log(`No more cake left! You need ${Math.abs(totalPieces)} pieces more.`)
    }
}
cake(["10",
"2",
"2",
"4",
"6",
"STOP"])