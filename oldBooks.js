function oldBooks(input) {
    let i = 0;
    let searchedBook = input[i];
    i++;
    let currentBook = input[i];
    i++;

    let isFound = false;
    let booksCheked = 0;

    while(currentBook !== "No More Books") {
        if (currentBook === searchedBook) {
            isFound = true;
            break;
        }
        booksCheked++;
        currentBook = input[i];
        i++;
    }

    if (isFound) {
        console.log(`You checked ${booksCheked} books and found it.`)
    } else {
        console.log("The book you search is not here!");
        console.log(`You checked ${booksCheked} books.`)
    }

}
oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])
