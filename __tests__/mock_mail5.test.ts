import {initApp} from "../mock_mail5";

test('start', () => {
    expect(initApp(200000, console.log)).toBe(true);
});


test('mock memory ok', () => {
    let f=jest.fn();
    initApp(200000, f);
    expect(f).toBeCalledWith("Rakendus käivitus");
});

test('mock memory little', () => {
    let f=jest.fn();
    initApp(20000, f);
    expect(f).toBeCalledWith("Vaba mälu ainult 20000");
    expect(f).toBeCalledTimes(1);
});