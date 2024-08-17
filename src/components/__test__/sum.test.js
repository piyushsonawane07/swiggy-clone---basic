import { sum } from "../sum";

test("Sum function should calculate sum of two functions" ,() => {
    const result = sum(3,2);
    
     //assertion
    expect(result).toBe(5);
});