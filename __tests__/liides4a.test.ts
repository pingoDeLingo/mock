import {StoringAdder} from "../liides4a";

let adder:StoringAdder=null;
beforeEach(() => {
    adder=new StoringAdder();
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

test('two values range', () => {
    adder.add(3);
    adder.add(5);
    expect(adder.getRange()).toBe(2);
});