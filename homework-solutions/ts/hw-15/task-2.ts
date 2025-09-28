/* Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению. 
Если значение не найдено, функция должна возвращать undefined.
Используйте keyof для типизации ключей объекта
 */

const example = {
  id: 1,
  name: 'Diana',
  surname: 'Jnonson',
};

function getKeyByValue<T extends Record<string, any>, V>(obj: T, value: V): keyof T | undefined {
  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
}

console.log(getKeyByValue(example, 'Diana'));
console.log(getKeyByValue(example, 1));
console.log(getKeyByValue(example, 'Heyri'));

