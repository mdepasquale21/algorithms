export class JesseAndCookies {

    private counter = 0;

    constructor(private readonly cookies: number[],
                private readonly minSweetness: number) {
        console.log(`k: ${this.minSweetness}`);
        console.log(`sweetness array: ${this.cookies}`);
        console.log('\n');
    }

    solve(): number {
        while (this.isSomeNumberSmallerThanMinSweetness()) {
            if (this.cookies.length === 1) {
                this.counter = -1;
                return this.counter;
            }
            this.cookies.sort((a, b) => a - b);
            console.log(this.cookies);
            const leastTwo = this.cookies.splice(0, 2);
            console.log(leastTwo);
            const newSweetness = leastTwo[0] + 2 * leastTwo[1];
            console.log(newSweetness);
            this.cookies.push(newSweetness);
            this.counter += 1;
        }
        return this.counter;
    }

    private isSomeNumberSmallerThanMinSweetness() {
        return this.cookies.some((n: number) => n < this.minSweetness);
    }

    getCookies(): number[] {
        return this.cookies;
    }

}
