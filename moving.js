function moving(input) {
    let i = 0;
    let width = Number(input[i]);
    i++;
    let length = Number(input[i]);
    i++;
    let hight = Number(input[i]);
    i++;
    let boxes = input[i];
    i++;
    let spaceAvailable = width * length * hight;

    while (boxes !== `Done`) {
        boxes = Number(boxes);
        spaceAvailable -= boxes;
        
        if(spaceAvailable <= 0) {
            break;
        }
        boxes = input[i];
        i++;
    }
    if (boxes === `Done`) {
        console.log(`${spaceAvailable} Cubic meters left.`)
    } else {
        console.log(`No more free space! You need ${Math.abs(spaceAvailable)} Cubic meters more.`)
    }
}
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])


