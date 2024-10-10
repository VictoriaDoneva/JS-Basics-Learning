function sumNumbers(input) {
    let index = 0;
    let total = Number(input[index]);
    index++;
    let nums = Number(input[index]);
    index++;

    while (total > nums) {
    let newNum  = Number(input[index]);
    nums += newNum;
    index++;
    }
    console.log(nums);
}
sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])


