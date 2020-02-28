import {countValleys} from "./count-valleys";

xdescribe("counting valleys", () => {
    test.each`
    valley | steps
    ${"UDDDUDUU"} | ${1}
    ${"DDUUDDUDUUUD"} | ${2}
    `('valley pattern $valley has steps $steps', ({valley, steps}) => {
        expect(countValleys(valley)).toBe(steps);
    });
});