function shopping(input){
  
    let budjet = Number(input[0]);
    let gpu = Number(input[1]);
    let cpu = Number(input[2]);
    let ram = Number(input[3]);

    let gpuMoney = gpu * 250;
    let cpuMoney = (gpuMoney * 0.35) * cpu;
    let ramMoney = (gpuMoney * 0.10) * ram;

    let total = cpuMoney + gpuMoney + ramMoney;

    if(gpu > cpu){
        total *= 0.85;
    }

    if(total <= budjet){
        console.log(`You have ${(budjet - total).toFixed(2)} leva left!`)
    }else{
        console.log(`Not enough money! You need ${(total - budjet).toFixed(2)} leva more!`)
    }
}