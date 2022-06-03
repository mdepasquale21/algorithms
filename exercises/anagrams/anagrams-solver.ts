export abstract class AnagramsSolver {
    abstract solve(s1: string, s2: string): number;

    protected buildArrayFromString(s: string): string[] {
        return s.split('');
    }
}

export class AnagramsMapSolver extends AnagramsSolver {

    solve(s1: string, s2: string): number {
        let mapS1 = new Map<string, number>([]);
        let mapS2 = new Map<string, number>([]);
        this.populateMap(mapS1, s1);
        this.populateMap(mapS2, s2);
        console.log(mapS1);
        console.log(mapS2);
        let counter = 0;
        for (const [letter, count] of mapS1) {
            if (!mapS2.has(letter)) {
                counter += 1;
            } else {
                counter += Math.abs(count - mapS2.get(letter));
            }
        }
        for (const [letter, count] of mapS2) {
            if (!mapS1.has(letter)) {
                counter += 1;
            } else {
                counter += Math.abs(count - mapS1.get(letter));
            }
        }
        return counter;
    }

    private populateMap(map: Map<string, number>, s: string) {
        for (let i of s) {
            map.set(i, this.countLetters(s, i));
        }
    }

    private countLetters(s: string, char: string): number {
        const letters: string[] = this.buildArrayFromString(s);
        let count = 0;
        for (let letter of letters) {
            if (letter === char) {
                count += 1;
            }
        }
        return count;
    }

}

export class AnagramsHammerLoopSolver extends AnagramsSolver {

    solve(s1: string, s2: string): number {
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
        counter += Math.abs(s1.length - s2.length);
        return counter;
    }

    private removeLetterFrom(s: string, char: string): string {
        const letters: string[] = this.buildArrayFromString(s);
        return letters.filter((letter) => letter !== char).join('');
    }

}
