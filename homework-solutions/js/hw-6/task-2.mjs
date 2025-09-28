/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/
const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

let resultUnique = [];
let resultNull;

let competitorPizzasLowerCase = [];
for (let i = 0; i < competitorPizzas.length; i++) {
  competitorPizzasLowerCase.push(competitorPizzas[i].toLowerCase());
}

let myPizzasT1LowerCase = [];
for (let i = 0; i < myPizzasT1.length; i++) {
  myPizzasT1LowerCase.push(myPizzasT1[i].toLowerCase());
}

let myPizzasT2LowerCase = [];
for (let i = 0; i < myPizzasT2.length; i++) {
  myPizzasT2LowerCase.push(myPizzasT2[i].toLowerCase());
}

for (const name of myPizzasT1LowerCase) {
  if (!competitorPizzasLowerCase.includes(name)) {
    myPizzasT1LowerCase[name] = name.charAt(0).toUpperCase() + name.slice(1);
    resultUnique.push(myPizzasT1LowerCase[name]);
  } else if (!resultUnique.length) {
    resultNull = null;
  }
}

for (const name of myPizzasT2LowerCase) {
  if (!competitorPizzasLowerCase.includes(name)) {
    myPizzasT2LowerCase[name] = name.charAt(0).toUpperCase() + name.slice(1);
    resultUnique.push(myPizzasT2LowerCase[name]);
  } else if (!resultUnique.length) {
    resultNull = null;
  }
}

console.log(resultUnique);
console.log(resultNull);

export { resultNull, resultUnique };
