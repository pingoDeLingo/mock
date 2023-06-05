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

class CustomMultiplier implements CalculatingFunction {
    constructor(
        private multiplier: number,
        private inputUnitName: string,
        private outputUnitName: string
    ) {}

    calculate(x: number): number {
        return x * this.multiplier;
    }

    inputUnit(): string {
        return this.inputUnitName;
    }

    outputUnit(): string {
        return this.outputUnitName;
    }
}

class CustomFunction implements CalculatingFunction {
    constructor(
        private equation: string,
        private inputUnitName: string,
        private outputUnitName: string
    ) {}

    calculate(x: number): number {
        const equationWithX = this.equation.replace("x", x.toString());
        return eval(equationWithX);
    }

    inputUnit(): string {
        return this.inputUnitName;
    }

    outputUnit(): string {
        return this.outputUnitName;
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
store1.addInput(20);
store1.addInput(50);

console.log(store1.getResult());
console.log("Maximum input: " + store1.getMaxInput());

let customMultiplier = new CustomMultiplier(10, "dm", "mm");
let store2: CalculationsStore = new CalculationsStore(customMultiplier);

store2.addInput(1);
store2.addInput(2);
store2.addInput(3);
store2.addInput(4);
store2.addInput(5);

console.log(store2.getResult());

let customFunction = new CustomFunction("x * 2.54", "in", "cm");
let store3: CalculationsStore = new CalculationsStore(customFunction);

store3.addInput(1);
store3.addInput(2);
store3.addInput(3);
store3.addInput(4);
store3.addInput(5);

console.log(store3.getResult());

let taxiFareCalculator = new CustomFunction("2 + x * 0.8", "km", "€");
let store4: CalculationsStore = new CalculationsStore(taxiFareCalculator);

store4.addInput(1);
store4.addInput(2);
store4.addInput(5);
store4.addInput(10);

console.log(store4.getResult());

let celsiusToFahrenheit = new CustomFunction("(x * 9 / 5) + 32", "°C", "°F");
let store5: CalculationsStore = new CalculationsStore(celsiusToFahrenheit);

store5.addInput(0);
store5.addInput(10);
store5.addInput(20);
store5.addInput(30);

console.log(store5.getResult());