// https://www.hackerrank.com/challenges/jesse-and-cookies/problem

console.log('Jesse and Cookies');

const k: number = 9;
let array: number[] = [2, 7, 3, 6, 4, 6];

console.log(`k: ${k}`);
console.log(`sweetness array: ${array}`);
console.log('\n');

array.sort((a, b) => a - b);

console.log('sorted array:');
console.log(array);
console.log('\n');

let counter = 0;
while (isSomeNumberSmallerThan(array, k)) {
    const leastTwo = array.splice(0, 2);
    console.log(leastTwo);
    const newSweetness = leastTwo[0] + 2 * leastTwo[1];
    console.log(newSweetness);
    array.push(newSweetness);
    array.sort((a, b) => a - b);
    console.log(array);
    counter += 1;
}
console.log('\n');
console.log('final number of operations required:');
console.log(counter);

function isEachNumberLargerThan(list: number[], k: number) {
    return list.every((n: number) => n >= k);
}

function isSomeNumberSmallerThan(list: number[], k: number) {
    return list.some((n: number) => n < k);
}
