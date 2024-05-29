'use strict';

function calcAverageCalories(days) {

  // Nie udawało mi się działać bezpośrednio na 'days', 
  // dlatego zdefiniowałem tablicę 'weekDays' zawierającą 'days'
    
  const weekDays = days;

  // Poniżej zwrot 'calories' w postaci tablicy 'weekCalories';

  const weekCalories = [];
  for (const weekDay of weekDays) {
    weekCalories.push(weekDay.calories);
  }

  // Sumowanie 'calories' z tablicy 'weekCalories';

  let sum = 0;
  for (let i = 0; i < weekCalories.length; i++) {
    sum += weekCalories[i];
  }
    
  // Poniżej wynik - obliczenie średniej
 
    return (sum / weekCalories.length);
    
}

    


   
console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
); // 2270

console.log(
  calcAverageCalories([])
); // 0



















