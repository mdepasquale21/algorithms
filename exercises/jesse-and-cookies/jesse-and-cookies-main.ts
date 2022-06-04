// https://www.hackerrank.com/challenges/jesse-and-cookies/problem

import { JesseAndCookies } from './jesse-and-cookies';

console.log('Jesse and Cookies');

const k: number = 9;
const cookiesList: number[] = [2, 7, 3, 6, 4, 6];

const jesseAndCookies: JesseAndCookies = new JesseAndCookies(cookiesList, k);

const result: number = jesseAndCookies.solve();

console.log('\n');
console.log('final cookies:');
console.log(jesseAndCookies.getCookies());
console.log('final number of operations required:');
console.log(result);
