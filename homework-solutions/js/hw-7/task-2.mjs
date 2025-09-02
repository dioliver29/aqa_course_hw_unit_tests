/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

import { type } from "os";
import { stringify } from "querystring";

function isPalindrom(word) {
  // Ваш код
  if (typeof word != 'string') {
    return false;
  } else {
    const reversed = word.split('').reverse().join('');
    word === reversed;
    return true;
  }
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  // Ваш код
}

export { isPalindrom, findLongestWords };
