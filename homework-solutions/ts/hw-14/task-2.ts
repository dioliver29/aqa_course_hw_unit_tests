/*
Напишите функцию, реализующую метод массивов map (сам map использовать нельзя, надо написать кастомный!).
Функция принимает на вход массив и колбэк. Используйте дженерик-типы.
	•	Затипизировать надо саму функцию и колбэк.
	•	Создать реализацию функции map, принимающую массив чисел 1–5, возвращающую новый массив,
где каждый элемент — это элемент исходного массива, умноженный на его индекс.

Пример:

map([1, 2, 3, 4, 5], callback) => [0, 2, 6, 12, 20]
*/

type mapCallback<T, U> = (element: T, index: number, array: T[]) => U;

function myMap<T, U>(array: T[], callback: mapCallback<T, U>): U[] {
  const result: U[] = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = callback(array[i], i, array);
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5];

const original = numbers.map((el, i) => el * i);
const custom = myMap(numbers, (el, i) => el * i);

console.log('original map:', original);
console.log('myMap:', custom);
