function sequence2kplus1(input) {
    let i = 0;
    let first = input[i];
    i++;
    let counter = 1;

    while (counter <= first) {
        console.log(counter)
        counter = counter * 2 + 1;
    }
}
sequence2kplus1(["8"])