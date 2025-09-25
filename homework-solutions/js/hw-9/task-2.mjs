/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  // Ваш код
  if (typeof character.name === 'string' && typeof character.age === 'number') {
    characters.push(character);
  } else {
    throw new Error('Invalid format');
  }
}

function getCharacter(name) {
  // Ваш код
  return characters.find((character) => character.name === name);
}

function getCharactersByAge(minAge) {
  // Ваш код
   if (typeof minAge !== "number" || Number.isNaN(minAge) || minAge < 0) {
    throw new Error("minAge must be a non-negative number");
  }
  return characters.filter(ch => ch.age >= minAge);
}

function updateCharacter(name, newCharacter) {
  // Ваш код
  const character = getCharacter(name);
  if (character) {
    character.name = newCharacter.name ?? character.name;
    character.age = newCharacter.age ?? character.age;
  } else {
    throw new Error(`Character "${name}" not found`);
  }
}

function removeCharacter(name) {
  // Ваш код
  const index = characters.findIndex(ch => ch.name === name);
  if (index !== -1) {
    characters.splice(index, 1);
  } else {
    throw new Error(`Character "${name}" not found`);
  }
}

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
