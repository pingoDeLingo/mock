interface CalculatingFunction{
    calculate(x: number):number;
    inputUnit():string;
    outputUnit():string;
    description():string;
}

class TimeCalculation implements CalculatingFunction{
    constructor(protected difference: number, protected inputType: string, protected outputType: string,
                protected descriptionstr: string){}
    calculate(input: number):number{
        let result:number=input+this.difference;
        if(result<0){result+=24;}
        if(result>23){result-=24;}
        return result;
    }
    inputUnit(): string {
        return this.inputType;
    }
    outputUnit(): string{
        return this.outputType;
    }
    description(): string {
        return this.descriptionstr;
    }
}

class CalculationsStore{
    protected inputs:number[]=[];
    protected outputs:number[]=[]
    constructor(protected calculator:CalculatingFunction){}
    addInput(x:number){
        this.inputs.push(x);
        this.outputs.push(this.calculator.calculate(x));
    }
    getResult():string{
        let result:string[]=[this.calculator.description()];
        for(let index in this.inputs){
            result.push(this.inputs[index]+" "+this.calculator.inputUnit()+" - "+
                this.outputs[index]+" "+this.calculator.outputUnit());
        }
        return result.join("\n");
    }
}

let converter=new TimeCalculation(-1, "h Tallinn", "h Stockholm", "Kellaajad linnades");
let store1:CalculationsStore=new CalculationsStore(converter);
store1.addInput(0);
store1.addInput(1);
store1.addInput(5);
store1.addInput(10);

console.log(store1.getResult());