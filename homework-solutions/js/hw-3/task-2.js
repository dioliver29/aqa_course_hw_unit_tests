/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/

let n = 2;
n = String(n);
let n2 = n + n;
let n3 = n + n + n;
n = Number(n);
n2 = Number(n2);
n3 = Number(n3);
let summ = n + n2 + n3;
console.log('n =', n,'n2 =', n2, 'n3 =', n3);
console.log(summ); 