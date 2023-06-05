interface Adder {
    add(nr: number): void;
    getSum(): number;
}

class StoringAdder implements Adder {
    protected sum: number = 0;
    protected values: number[] = [];

    add(nr: number) {
        this.sum += nr;
        this.values.push(nr);
    }

    getSum(): number {
        return this.sum;
    }

    getRange(): number {
        return this.values.length;
    }
}

export { StoringAdder };