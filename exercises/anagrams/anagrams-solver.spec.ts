import { AnagramsHammerLoopSolver, IAnagramsSolver } from './anagrams-solver';

describe('AnagramsSolver', () => {

    describe('AnagramsHammerLoopSolver', () => {
        let solver: IAnagramsSolver;

        beforeEach(() => {
            solver = new AnagramsHammerLoopSolver();
        });

        describe('when input is default (abc, amnop)', () => {
            let s1 = 'abc';
            let s2 = 'amnop';

            it('should return 6', () => {
                expect(solver.solve(s1, s2)).toEqual(6);
            });
        });

        describe('when input is (cde, abc)', () => {
            let s1 = 'cde';
            let s2 = 'abc';

            it('should return 4', () => {
                expect(solver.solve(s1, s2)).toEqual(4);
            });
        });

        describe('when input is (aaab, abc)', () => {
            let s1 = 'aaab';
            let s2 = 'abc';

            it('should return 3', () => {
                expect(solver.solve(s1, s2)).toEqual(3);
            });
        });

        describe('when input is (aaabaasd, akcd)', () => {
            let s1 = 'aaabaasd';
            let s2 = 'akcd';

            it('should return 8', () => {
                expect(solver.solve(s1, s2)).toEqual(8);
            });
        });

        describe('when input is (aaabbaasdt, abkcsd)', () => {
            let s1 = 'aaabbaasdt';
            let s2 = 'abkcsd';

            it('should return 8', () => {
                expect(solver.solve(s1, s2)).toEqual(8);
            });
        });

        describe('when input is (kmom, ambkcsd)', () => {
            let s1 = 'kmom';
            let s2 = 'ambkcsd';

            it('should return 7', () => {
                expect(solver.solve(s1, s2)).toEqual(7);
            });
        });

        describe('when input is (aaaaaaaaaasd, askd)', () => {
            let s1 = 'aaaaaaaaaasd';
            let s2 = 'akd';

            it('should return 11', () => {
                expect(solver.solve(s1, s2)).toEqual(11);
            });
        });

        describe('when input is (babbablooba, abo)', () => {
            let s1 = 'babbablooba';
            let s2 = 'abol';

            it('should return 7', () => {
                expect(solver.solve(s1, s2)).toEqual(7);
            });
        });

        describe('when input is (babbablooba, abo)', () => {
            let s1 = 'wow';
            let s2 = 'w';

            it('should return 2', () => {
                expect(solver.solve(s1, s2)).toEqual(2);
            });
        });

    });

});
