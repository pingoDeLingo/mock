import {initApp} from "../mock_mail5";

test('start', () => {
    expect(initApp(200000, console.log)).toBe(true);
});