import {Adder, SimpleAdder} from "../liides1a";

let adder:Adder=null;

beforeEach(() => {
    adder=new SimpleAdder();
})

test('start', () => {
    expect(adder.getSum()).toBe(0);
});

test('one value', () => {
    adder.add(3);
    expect(adder.getSum()).toBe(3);
});

test('two values', () => {
    adder.add(3);
    adder.add(5);
    expect(adder.getSum()).toBe(8);
});