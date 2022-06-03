// https://www.hackerrank.com/challenges/making-anagrams/problem

import * as promptSync from 'prompt-sync';

const prompt = promptSync();

// needed if multi line prompt, issue: https://github.com/heapwolf/prompt-sync/issues/25#issuecomment-798955059
const multiLinePrompt = ask => {
    const lines = ask.split(/\r?\n/);
    const promptLine = lines.pop();
    console.log(lines.join('\n'));
    return prompt(promptLine);
};

const input1 = prompt('first string: ', 'abc', {});
const input2 = prompt('second string: ', 'amnop', {});

console.log('these are the inputs:');
console.log(`${input1},${input2}`);

console.log('\n');
console.log('this is the minimum number of character deletions required to make the two inputs anagrams:\n');
console.log();
