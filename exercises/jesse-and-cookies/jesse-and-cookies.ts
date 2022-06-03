// https://www.hackerrank.com/challenges/jesse-and-cookies/problem

export class JesseAndCookies {

    private counter = 0;

    constructor(private readonly cookies: number[],
                private readonly minSweetness: number) {
        console.log(`k: ${this.minSweetness}`);
        console.log(`sweetness array: ${this.cookies}`);
        console.log('\n');
    }

    solve(): number {
        while (this.isSomeNumberSmallerThan()) {
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

    private isSomeNumberSmallerThan() {
        return this.cookies.some((n: number) => n < this.minSweetness);
    }

    getCookies(): number[] {
        return this.cookies;
    }

    getCounter(): number {
        return this.counter;
    }

}

console.log('Jesse and Cookies');

const k: number = 9;
const cookiesList: number[] = [2, 7, 3, 6, 4, 6];

const jesseAndCookies1: JesseAndCookies = new JesseAndCookies(cookiesList, k);

jesseAndCookies1.solve();

console.log('\n');
console.log('final cookies:');
console.log(jesseAndCookies1.getCookies());
console.log('final number of operations required:');
console.log(jesseAndCookies1.getCounter());
