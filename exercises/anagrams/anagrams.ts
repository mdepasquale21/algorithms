// https://www.hackerrank.com/challenges/making-anagrams/problem

import * as promptSync from 'prompt-sync';
import {
    AnagramsHammerLoopSolver,
    AnagramsMapSolver,
    AnagramsSmartLoopSolver,
    AnagramsSmartMapSolver,
    AnagramsSolver
} from './anagrams-solver';

const prompt = promptSync();

// needed if multi line prompt, issue: https://github.com/heapwolf/prompt-sync/issues/25#issuecomment-798955059
const multiLinePrompt = ask => {
    const lines = ask.split(/\r?\n/);
    const promptLine = lines.pop();
    console.log(lines.join('\n'));
    return prompt(promptLine);
};

const input1: string = prompt('first string: ', 'abc', {});
const input2: string = prompt('second string: ', 'amnop', {});

console.log('these are the inputs:');
console.log(`${input1},${input2}`);

const dumbLoopSolver: AnagramsSolver = new AnagramsHammerLoopSolver();
const dumbLoopSolverResult: number = dumbLoopSolver.solve(input1, input2);

const smartLoopSolver: AnagramsSolver = new AnagramsSmartLoopSolver();
const smartLoopSolverResult: number = smartLoopSolver.solve(input1, input2);

const mapSolver: AnagramsSolver = new AnagramsMapSolver();
const mapSolverResult: number = mapSolver.solve(input1, input2);

const smartMapSolver: AnagramsSolver = new AnagramsSmartMapSolver();
const smartMapSolverResult: number = smartMapSolver.solve(input1, input2);

console.log('\n');
console.log('this is the minimum number of character deletions required to make the two inputs anagrams:\n');
console.log(`loop solver: ${dumbLoopSolverResult}`);
console.log(`smart loop solver: ${smartLoopSolverResult}`);
console.log(`map solver: ${mapSolverResult}`);
console.log(`smart map solver: ${smartMapSolverResult}`);
