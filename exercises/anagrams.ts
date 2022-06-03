// https://www.hackerrank.com/challenges/making-anagrams/problem

import * as promptSync from 'prompt-sync';

const prompt = promptSync();

const input1 = prompt('first string:\n', 'abc', {});
const input2 = prompt('second string:\n', 'amnop', {});

console.log('\n');
console.log('these are the inputs:');
console.log(`${input1},${input2}`);

console.log('this is the minimum number of character deletions required to make the two inputs anagrams:\n');
console.log();