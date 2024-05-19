function building(input){
    let floorEntered = Number(input[0]);
    let roomEntered = Number(input[1]);

    let result = "";

    for(let floor = floorEntered; floor >= 1; floor--) {
        for(let room = 0; room < roomEntered; room++) {
            //console.log(`${floor}${room}`)
            if (floor === floorEntered) {
                result += `L${floor}${room} `;
            } else if (floor % 2 === 0) {
                result += `O${floor}${room} `;
            } else {
                result += `A${floor}${room} `;
            }
        }
        result += "\n";
    }
    console.log(result);
}
building(["6", "4"])