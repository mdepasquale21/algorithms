const list1: number[] = [-25, 67, 72, 1036, 948, 7, 65, 410, 55, 3, 79, 100];
const list2: number[] = [3, 4, 7, 6, 98, 7, 605, 410, 55, 3, 79, 100];
const list3: number[] = [3, 4, 71, 63, -8, 777, 65, 410, 505, 33, 79, -100];

const lists: number[][] = [list1, list2, list3];

function getMax(array: number[]): number {
    const sortedArray = array.sort((a, b) => b - a);
    return sortedArray[0];
}

function getMin(array: number[]): number {
    const sortedArray = array.sort((a, b) => a - b);
    return sortedArray[0];
}

for (const list of lists) {
    console.log(`get maximum and minimum element from list ${list}`);
    console.log(`max: ${getMax(list)}`);
    console.log(`min: ${getMin(list)}`);
}
