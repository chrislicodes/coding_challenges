"use strict";

//needs refactoring
function nbMonths(
  startPriceOld,
  startPriceNew,
  savingperMonth,
  percentlossByMonth
) {
  let moneyLeft = 0;

  let oldCar = startPriceOld;
  let newCar = startPriceNew;
  let percentLossByMonth = percentlossByMonth;

  const savingsPerMonth = savingperMonth;

  let month = 0;

  if (oldCar - newCar >= 0)
    return [month, Math.round(moneyLeft + oldCar - newCar)];

  //every month
  while (true) {
    moneyLeft += savingsPerMonth; //can save this amount every month
    oldCar = oldCar - (oldCar * percentLossByMonth) / 100; //reduce worth of old car
    newCar = newCar - (newCar * percentLossByMonth) / 100; //reduce worth of new car

    if (month % 2 === 0) percentLossByMonth += 0.5; //Increasing Loss

    if (moneyLeft + oldCar - newCar > 0) {
      break;
    }

    month++;
  }

  return [month + 1, Math.round(moneyLeft + oldCar - newCar)];
}

nbMonths(2000, 8000, 1000, 1.5); //[6, 766]
