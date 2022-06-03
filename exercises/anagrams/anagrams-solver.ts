export class AnagramsHammerLoopSolver implements IAnagramsSolver {

    solve(s1, s2): number {
        let counter = 0;
        for (let i of s1) {
            if (!s2.includes(i)) {
                counter += 1;
                s1 = this.removeLetterFrom(s1, i);
            }
        }
        for (let j of s2) {
            if (!s1.includes(j)) {
                counter += 1;
                s2 = this.removeLetterFrom(s2, j);
            }
        }
        console.log(s1, s2);
        counter += Math.abs(s1.length - s2.length);
        return counter;
    }

    private removeLetterFrom(s: string, char: string): string {
        const letters: string[] = this.buildArrayFromString(s);
        return letters.filter((letter) => letter !== char).join('');
    }

    private buildArrayFromString(s: string): string[] {
        return s.split('');
    }

}

export interface IAnagramsSolver {
    solve(s1: string, s2: string): number;
}
