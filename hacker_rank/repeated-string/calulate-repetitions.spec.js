import { calculateRepetitions } from "./calulate-repetitions";

xdescribe("calulate repetitions in repeated string", () => {
    test.each`
    str | length | number
    ${"aba"} | ${10} | ${7}
    ${"a"} | ${1000000000000} | ${1000000000000}
    `("repeated string $str of length $length has $number of repetitions", 
    ({str, length, number}) => {
        expect(calculateRepetitions(str, length, "a")).toBe(number);
    });
});