function numberPyramid(input) {
    let n = Number(input[0]);
    let printNumber = 1;

    let bully = false;
     
    for (let row = 1; row <= n; row++) {
        let buff = "";
       for(let column = 1; column <= row; column++) {
        buff += `${printNumber} `;
        if (printNumber === n) {
            bully = true;
            break;
        }
        printNumber++;
       } 
       console.log(buff);
       if(bully) {
        break;
       }
    }
}
numberPyramid(["12"])