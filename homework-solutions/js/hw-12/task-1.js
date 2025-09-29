/* 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
  его резолва в консоль
3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
  Обработайте промис методом .catch и выведите результат его резолва в консоль
4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
  в консоль результаты работы каждого промиса через .then
6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
  в консоль статус и результат каждого промиса через .then
7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch
 */

// 1. delayTwoSeconds
function delayTwoSeconds(callback) {
  setTimeout(callback, 2000);
}

delayTwoSeconds(() => {
  console.log('2 секунды');
});

// 2. Промис должен резолваться с числом 1
const promiseResolvesWithOne = new Promise((resolve) => {
  resolve(1);
});

promiseResolvesWithOne.then((value) => {
  console.log(value);
});

// 3.  Промис должен реджектаться с "Promise failed"
const promiseReject = new Promise((_, reject) => {
  reject('Promise failed');
});

promiseReject.catch((error) => {
  console.log(error);
});

// 4. promiseNumber
function promiseNumber(num) {
  return new Promise((resolve) => {
    resolve(num);
  });
}

// 5. Promise.all
Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((results) => {
  results.forEach((result, index) => {
    console.log(`Promise.all result[${index}]:`, result);
  });
});

// 6. Promise.allSettled
Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((results) => {
  results.forEach((result, index) => {
    console.log(`Promise.allSettled result[${index}]: status=${result.status}, value=${result.value}`);
  });
});

// 7. асинхронные функции с блоком try..catch
async function runAsyncExamples() {
  try {
    const results = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    results.forEach((result) => {
      console.log(result);
    });
  } catch (error) {
    console.error(error);
  }

  try {
    const results = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    results.forEach((result, index) => {
      console.log(result.status, result.value);
    });
  } catch (error) {
    console.error(error);
  }
}

runAsyncExamples();
