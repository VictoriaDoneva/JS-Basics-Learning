function equalSumsEvenOddPosition(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let result = ``;

    for (let curNum = startNum; curNum <= endNum; curNum++) {
        let evenPostionSum = 0;
        let oddPositionSum = 0;
        let curNumAsStr = curNum.toString();

        for (let i = 0; i < curNumAsStr.length; i++) {
        let currDigit = Number(curNumAsStr[i]);
        let position = i + 1;

            if(position % 2 === 0){
            evenPostionSum += currDigit;
            } else {
            oddPositionSum += currDigit;
            }
        }

        if(evenPostionSum === oddPositionSum) {
            result += curNumAsStr + ` `;
        }
    }
    console.log(result)
}
equalSumsEvenOddPosition(["299900",
"300000"])