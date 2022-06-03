export abstract class AnagramsSolver {
    abstract solve(s1: string, s2: string): number;

    protected countLetters(s: string, char: string): number {
        const letters: string[] = this.buildArrayFromString(s);
        let count = 0;
        for (const letter of letters) {
            if (letter === char) {
                count += 1;
            }
        }
        return count;
    }

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
        let counter = 0;
        for (const [letter, count] of mapS1) {
            if (mapS2.has(letter)) {
                counter += Math.abs(count - mapS2.get(letter));
                mapS2.delete(letter);
                mapS1.delete(letter);
            }
        }
        for (const value of mapS1.values()) {
            counter += value;
        }
        for (const value of mapS2.values()) {
            counter += value;
        }
        return counter;
    }

    private populateMap(map: Map<string, number>, s: string) {
        for (const i of s) {
            map.set(i, this.countLetters(s, i));
        }
    }

}

export class AnagramsHammerLoopSolver extends AnagramsSolver {

    solve(s1: string, s2: string): number {
        let counter = 0;
        for (const i of s1) {
            if (s2.includes(i)) {
                const count1 = this.countLetters(s1, i);
                const count2 = this.countLetters(s2, i);
                counter += Math.abs(count1 - count2);
                s1 = this.removeLetterFrom(s1, i);
                s2 = this.removeLetterFrom(s2, i);
            }
        }
        counter += s1.length + s2.length;
        return counter;
    }

    private removeLetterFrom(s: string, char: string): string {
        const letters: string[] = this.buildArrayFromString(s);
        return letters.filter((letter) => letter !== char).join('');
    }

}
