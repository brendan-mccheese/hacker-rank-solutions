import { getSum } from "./solution";

xdescribe("btree array sum", () => {
    // test("returns empty string for empty array", () => {
    //     const result = getSum([]);
    //     expect(result).toBe("");
    // });

    test("for input [1, 10, 5, 1, 0, 6] returns empty string", () => {
        const result = getSum([1, 10, 5, 1, 0, 6]);
        expect(result).toBe("");
    });

    // test("for input [6, 8, 10, 2, 5] returns Left", () => {
    //     const result = getSum([1, 10, 5, 0, 6]);
    //     expect(result).toBe("Left");
    // });
});