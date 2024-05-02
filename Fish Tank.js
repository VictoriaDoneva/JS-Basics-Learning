function fishTank(input) {
    let lenght = Number(input[0]);
    let widht = Number(input[1]);
    let hight = Number(input[2]);
    let percent = Number(input[3]);

    let aquariumVolume = lenght * widht * hight;
    let volumeLiters = aquariumVolume / 1000;
    let space = percent / 100;

    let litres = volumeLiters * (1 - space);
    

    console.log(litres)
}

fishTank(["85", "75", "47", "17"])