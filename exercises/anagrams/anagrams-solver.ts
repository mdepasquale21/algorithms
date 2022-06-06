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

export class AnagramsSmartMapSolver extends AnagramsSolver {

    solve(s1: string, s2: string): number {
        let map = new Map<string, number>([]);
        for (const letter of s1) {
            if (map.has(letter)) {
                const value = map.get(letter);
                map.set(letter, value + 1);
            } else {
                map.set(letter, 1);
            }
        }
        for (const letter of s2) {
            if (map.has(letter)) {
                const value = map.get(letter);
                map.set(letter, value - 1);
            } else {
                map.set(letter, -1);
            }
        }
        let numberOfOperations: number = 0;
        for (const value of map.values()) {
            numberOfOperations += Math.abs(value);
        }
        return numberOfOperations;
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

export class AnagramsSmartLoopSolver extends AnagramsSolver {

    solve(s1: string, s2: string): number {
        const counters: number[] = Array.from({length: 26}, (_, i) => 0);
        for (let i = 0; i < s1.length; i++) {
            counters[s1.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        for (let i = 0; i < s2.length; i++) {
            counters[s2.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0)]--;
        }
        return counters.reduce((x, y) => Math.abs(x) + Math.abs(y));
    }

}