import { JesseAndCookies } from './jesse-and-cookies';

describe('Jess and Cookies', () => {
    let jesseAndCookies: JesseAndCookies;

    describe('when k = 9 and array is [2, 7, 3, 6, 4, 6]', () => {
        const k: number = 9;
        const array: number[] = [2, 7, 3, 6, 4, 6];

        const expectedResult: number = 4;
        let result: number;

        beforeEach(() => {
            jesseAndCookies = new JesseAndCookies(array, k);
            result = jesseAndCookies.solve();
        });

        it(`should return ${expectedResult}`, () => {
            expect(result).toEqual(expectedResult);
        });
    });

    describe('when k = 7 and array is [1, 2, 3, 9, 10, 12]', () => {
        const k: number = 7;
        const array: number[] = [1, 2, 3, 9, 10, 12];

        const expectedResult: number = 2;
        let result: number;

        beforeEach(() => {
            jesseAndCookies = new JesseAndCookies(array, k);
            result = jesseAndCookies.solve();
        });

        it(`should return ${expectedResult}`, () => {
            expect(result).toEqual(expectedResult);
        });
    });

    describe('when k = 3 and array is [2]', () => {
        const k: number = 3;
        const array: number[] = [2];

        const expectedResult: number = -1;
        let result: number;

        beforeEach(() => {
            jesseAndCookies = new JesseAndCookies(array, k);
            result = jesseAndCookies.solve();
        });

        it(`should return immediately ${expectedResult}`, () => {
            expect(result).toEqual(expectedResult);
        });
    });

    describe('when k = 22 and array is [1, 1, 1, 1, 1, 1]', () => {
        const k: number = 22;
        const array: number[] = [1, 1, 1, 1, 1, 1];

        const expectedResult: number = -1;
        let result: number;

        beforeEach(() => {
            jesseAndCookies = new JesseAndCookies(array, k);
            result = jesseAndCookies.solve();
        });

        it(`should return ${expectedResult} after a few iterations`, () => {
            expect(result).toEqual(expectedResult);
        });
    });

});
