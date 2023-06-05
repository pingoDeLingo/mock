interface Adder{
    add(nr: number):void;
    getSum():number;
}

class SimpleAdder implements Adder{
    protected sum:number=0;
    add(nr:number){this.sum+=nr;}
    getSum(): number {
        return this.sum;
    }
}

export{
    Adder,
    SimpleAdder
}