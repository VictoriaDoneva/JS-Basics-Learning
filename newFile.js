function newFile(input) {
    let index = 0;
    let str = input[index];
    while (str !== "Stop") {
        console.log("Infinity loop");
        index++;
        str = input[index];
    }
}
newFile([""])