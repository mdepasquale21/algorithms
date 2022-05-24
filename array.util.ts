export class ArrayUtil {
    public static last<T>(array: T[]): T {
        if (array.length === 0) {
            return undefined;
        }
        return array[array.length - 1];
    }

    public static isEmpty<T>(array: T[]): boolean {
        return array && array.length === 0;
    }

    public static first<T>(array: T[]): T {
        if (array.length === 0) {
            return undefined;
        }
        return array[0];
    }

    public static areEqual<T>(firstArray: T[], secondArray: T[]): boolean {
        if (firstArray === secondArray) {
            return true;
        }
        if (firstArray === null || firstArray === undefined || secondArray === null || secondArray === undefined) {
            return false;
        }
        if (!Array.isArray(firstArray) || !Array.isArray(secondArray)) {
            return false;
        }
        if (firstArray.length !== secondArray.length) {
            return false;
        }
        for (let i = 0; i < firstArray.length; i++) {
            if (firstArray[i] !== secondArray[i]) {
                return false;
            }
        }
        return true;
    }

    public static flat<T>(matrix: T[][]): T[] {
        return [].concat(...matrix);
    }

    public static sort<T>(array: T[], compareFn?: (a: T, b: T) => number): T[] {
        if (!array) {
            return null;
        }

        return [...array].sort(compareFn);
    }
}
