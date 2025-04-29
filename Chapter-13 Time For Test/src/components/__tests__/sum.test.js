import {sum} from "../Sum";

test('sum function should calculate sum of two numbers', () => {
    const result = sum(3,4);
    expect(result).toBe(7);
})

test('sum with wrong input should fail', () => {
    const result = sum(3,4);
    expect(result).not.toBe(8);
})