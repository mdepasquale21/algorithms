import { AnagramsHammerLoopSolver, AnagramsMapSolver } from './anagrams-solver';

describe('AnagramsSolver', () => {
    let loopSolver: AnagramsHammerLoopSolver;
    let mapSolver: AnagramsMapSolver;

    beforeEach(() => {
        loopSolver = new AnagramsHammerLoopSolver();
        mapSolver = new AnagramsMapSolver();
    });

    describe('when input is default (abc, amnop)', () => {
        const s1 = 'abc';
        const s2 = 'amnop';
        const expectedResult = 6;

        it(`should return ${expectedResult}`, () => {
            expect(loopSolver.solve(s1, s2)).toEqual(expectedResult);
            expect(mapSolver.solve(s1, s2)).toEqual(expectedResult);
        });
    });

    describe('when input is (cde, abc)', () => {
        const s1 = 'cde';
        const s2 = 'abc';
        const expectedResult = 4;

        it(`should return ${expectedResult}`, () => {
            expect(loopSolver.solve(s1, s2)).toEqual(expectedResult);
            expect(mapSolver.solve(s1, s2)).toEqual(expectedResult);
        });
    });

    describe('when input is (aaab, abc)', () => {
        const s1 = 'aaab';
        const s2 = 'abc';
        const expectedResult = 3;

        it(`should return ${expectedResult}`, () => {
            expect(loopSolver.solve(s1, s2)).toEqual(expectedResult);
            expect(mapSolver.solve(s1, s2)).toEqual(expectedResult);
        });
    });

    describe('when input is (aaabaasd, akcd)', () => {
        const s1 = 'aaabaasd';
        const s2 = 'akcd';
        const expectedResult = 8;

        it(`should return ${expectedResult}`, () => {
            expect(loopSolver.solve(s1, s2)).toEqual(expectedResult);
            expect(mapSolver.solve(s1, s2)).toEqual(expectedResult);
        });
    });

    describe('when input is (aaabbaasdt, abkcsd)', () => {
        const s1 = 'aaabbaasdt';
        const s2 = 'abkcsd';
        const expectedResult = 8;

        it(`should return ${expectedResult}`, () => {
            expect(loopSolver.solve(s1, s2)).toEqual(expectedResult);
            expect(mapSolver.solve(s1, s2)).toEqual(expectedResult);
        });
    });

    describe('when input is (kmom, ambkcsd)', () => {
        const s1 = 'kmom';
        const s2 = 'ambkcsd';
        const expectedResult = 7;

        it(`should return ${expectedResult}`, () => {
            expect(loopSolver.solve(s1, s2)).toEqual(expectedResult);
            expect(mapSolver.solve(s1, s2)).toEqual(expectedResult);
        });
    });

    describe('when input is (aaaaaaaaaasd, askd)', () => {
        const s1 = 'aaaaaaaaaasd';
        const s2 = 'akd';
        const expectedResult = 11;

        it(`should return ${expectedResult}`, () => {
            expect(loopSolver.solve(s1, s2)).toEqual(expectedResult);
            expect(mapSolver.solve(s1, s2)).toEqual(expectedResult);
        });
    });

    describe('when input is (babbablooba, abo)', () => {
        const s1 = 'babbablooba';
        const s2 = 'abol';
        const expectedResult = 7;

        it(`should return ${expectedResult}`, () => {
            expect(loopSolver.solve(s1, s2)).toEqual(expectedResult);
            expect(mapSolver.solve(s1, s2)).toEqual(expectedResult);
        });
    });

    describe('when input is (babbablooba, abo)', () => {
        const s1 = 'wow';
        const s2 = 'w';
        const expectedResult = 2;

        it(`should return ${expectedResult}`, () => {
            expect(loopSolver.solve(s1, s2)).toEqual(expectedResult);
            expect(mapSolver.solve(s1, s2)).toEqual(expectedResult);
        });
    });

    describe('when input is (akadasdwow, woak)', () => {
        const s1 = 'akadasdwow';
        const s2 = 'woak';
        const expectedResult = 6;

        it(`should return ${expectedResult}`, () => {
            expect(loopSolver.solve(s1, s2)).toEqual(expectedResult);
            expect(mapSolver.solve(s1, s2)).toEqual(expectedResult);
        });
    });

    describe('when input is (adab, bada)', () => {
        const s1 = 'adab';
        const s2 = 'bada';
        const expectedResult = 0;

        it(`should return ${expectedResult}`, () => {
            expect(loopSolver.solve(s1, s2)).toEqual(expectedResult);
            expect(mapSolver.solve(s1, s2)).toEqual(expectedResult);
        });
    });

    describe('when input is (cacac, acacia)', () => {
        const s1 = 'cacac';
        const s2 = 'acacia';
        const expectedResult = 3;

        it(`should return ${expectedResult}`, () => {
            expect(loopSolver.solve(s1, s2)).toEqual(expectedResult);
            expect(mapSolver.solve(s1, s2)).toEqual(expectedResult);
        });
    });

    describe('when input is (baobab, ababia)', () => {
        const s1 = 'baobab';
        const s2 = 'ababia';
        const expectedResult = 4;

        it(`should return ${expectedResult}`, () => {
            expect(loopSolver.solve(s1, s2)).toEqual(expectedResult);
            expect(mapSolver.solve(s1, s2)).toEqual(expectedResult);
        });
    });

    describe('when input is (baobab, baba)', () => {
        const s1 = 'baobab';
        const s2 = 'baba';
        const expectedResult = 2;

        it(`should return ${expectedResult}`, () => {
            expect(loopSolver.solve(s1, s2)).toEqual(expectedResult);
            expect(mapSolver.solve(s1, s2)).toEqual(expectedResult);
        });
    });

});
