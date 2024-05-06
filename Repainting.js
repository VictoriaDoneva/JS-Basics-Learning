function repainting(input) {

  let nylon = Number(input[0]);
  let paint = Number(input[1]);
  let amb = Number(input[2]);
  let workingHours = Number(input[3]);
  let bags = 0.40;

  let sumOfNylon = (nylon + 2) * 1.50;
  let sumOfPaint = paint * 1.10 * 14.50;
  let sumOfAmb = amb * 5;
  
  let materials = sumOfNylon + sumOfPaint + sumOfAmb + bags;
  let workCost = (materials * 0.3) * workingHours;
  let expenses = workCost + materials;

  console.log(expenses);
}

repainting(["10", "11", "4", "8"])