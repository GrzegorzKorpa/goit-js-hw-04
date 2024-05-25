'use strict';

function isEnoughCapacity(products, containerSize) {

  // poniżej zwrócenie wartości z 'products' do postaci nowej tablicy

  const tags = [];
  for (const key in products) {
    tags.push(`${products[key]}`)
  };

  // zwróciło tablicę stringów, więc poniżej zamiana na tablicę liczb

  let numberTags = tags.map(Number);
  
  // poniżej sumowanie elementów tablicy
  
  let sum = 0;
  for (let i = 0; i < numberTags.length; i++) {
    sum += numberTags[i];
  }
  
  // poniżej porównanie sumy tablicy i containerSize

  return (sum <= containerSize);
  
}


console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)
); // false
