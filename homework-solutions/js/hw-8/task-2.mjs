/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function sortedByVowels(wordsArr) {
  const vowels = 'aeiou';
  function countVowels(word) {
    return word
      .toLowerCase()
      .split('')
      .filter((character) => vowels.includes(character)).length;
  }

  return wordsArr.sort((a, b) => countVowels(a) - countVowels(b));
}

export { sortedByVowels };
