import { sum } from "../sum"


test("sum", ()=>{
    const result = sum(2,3);

    // Assertion
    expect(result).toBe(7);
});