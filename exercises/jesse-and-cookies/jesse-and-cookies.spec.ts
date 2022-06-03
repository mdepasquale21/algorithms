import { JesseAndCookies } from './jesse-and-cookies';

describe('Jess and Cookies', () => {
    let jesseAndCookies: JesseAndCookies;

    describe('when k = 9 and array is [2, 7, 3, 6, 4, 6]', () => {
        const k: number = 9;
        const array: number[] = [2, 7, 3, 6, 4, 6];

        beforeEach(() => {
            jesseAndCookies = new JesseAndCookies(array, k);
            jesseAndCookies.solve();
        });

        it('should return 4', () => {
            expect(jesseAndCookies.getCounter()).toEqual(4);
        });
    });

    describe('when k = 7 and array is [1, 2, 3, 9, 10, 12]', () => {
        const k: number = 7;
        const array: number[] = [1, 2, 3, 9, 10, 12];

        beforeEach(() => {
            jesseAndCookies = new JesseAndCookies(array, k);
            jesseAndCookies.solve();
        });

        it('should return 2', () => {
            expect(jesseAndCookies.getCounter()).toEqual(2);
        });
    });

});