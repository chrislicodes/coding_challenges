"use strict";

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

  console.log("Old", oldCar, "New:", newCar);

  let month = 0;

  if (oldCar - newCar >= 0)
    return [month, Math.round(moneyLeft + oldCar - newCar)];

  //every month
  while (true) {
    // console.log("BEFORE", moneyLeft + oldCar - newCar);
    moneyLeft += savingsPerMonth; //can save this amount every month
    oldCar = oldCar - (oldCar * percentLossByMonth) / 100; //reduce worth of old car
    newCar = newCar - (newCar * percentLossByMonth) / 100; //reduce worth of new car

    // console.log("AFTER", moneyLeft + oldCar - newCar);

    if (month % 2 === 0) percentLossByMonth += 0.5; //Increasing Loss

    // console.log(
    //   `End month: ${month} - percentLoss: ${percentLossByMonth} - available: ${
    //     moneyLeft + oldCar - newCar
    //   }`
    // );

    if (moneyLeft + oldCar - newCar > 0) {
      //   console.log(month, moneyLeft);
      break;
    }

    month++;
  }

  return [month + 1, Math.round(moneyLeft + oldCar - newCar)];
}

nbMonths(2000, 8000, 1000, 1.5); //[6, 766]
