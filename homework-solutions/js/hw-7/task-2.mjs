/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

import { type } from 'os';
import { stringify } from 'querystring';

function isPalindrom(word) {
  if (typeof word !== 'string') {
    return false;
  }

  word = word.toLowerCase();
  const reversed = word.split('').reverse().join('');
  return word === reversed;
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (typeof sentence !== 'string') {
    return [];
  }

  sentence = sentence.trim().split(/\s+/).filter(Boolean);

  if (sentence.length === 0) return [];

  let maxLength = 0;
  let longest = [];

  for (const word of sentence) {
    if (word.length > maxLength) {
      maxLength = word.length;
      longest = [word];
    } else if (word.length === maxLength) {
      longest.push(word);
    }
  }

  return longest;
}

export { isPalindrom, findLongestWords };
