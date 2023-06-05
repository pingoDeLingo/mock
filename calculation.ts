interface CalculatingFunction {
    calculate(x: number): number;
    inputUnit(): string;
    outputUnit(): string;
}

class InchesToCm implements CalculatingFunction {
    calculate(inches: number): number {
        return inches * 2.54;
    }

    inputUnit(): string {
        return "in";
    }

    outputUnit(): string {
        return "cm";
    }
}

class CalculationsStore {
    protected inputs: number[] = [];
    protected outputs: number[] = [];

    constructor(protected calculator: CalculatingFunction) {}

    addInput(x: number) {
        this.inputs.push(x);
        this.outputs.push(this.calculator.calculate(x));
    }

    getResult(): string {
        let result: string[] = [];
        for (let index in this.inputs) {
            result.push(
                this.inputs[index] +
                " " +
                this.calculator.inputUnit() +
                " - " +
                this.outputs[index] +
                " " +
                this.calculator.outputUnit()
            );
        }
        return result.join("\n");
    }

    getMaxInput(): number {
        if (this.inputs.length === 0) {
            return 0;
        }
        return Math.max(...this.inputs);
    }
}

let converter = new InchesToCm();
let store1: CalculationsStore = new CalculationsStore(converter);

store1.addInput(0);
store1.addInput(1);
store1.addInput(5);
store1.addInput(10);

console.log(store1.getResult());
console.log("Maximum input: " + store1.getMaxInput());