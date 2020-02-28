import { calcJumps } from "./calc-jumps";

xdescribe('calc cloud jumps', () => {
    test.each`
    sequence | jumps
    ${[0,0,1,0,0,1,0]} | ${4}
    ${[0,0,0,0,1,0]} | ${3}
    ${[0,0,0,1,0,0]} | ${3}
    `('cloud sequence $sequence has $jumps jumps', ({sequence, jumps}) => {
        expect(calcJumps(sequence)).toEqual(jumps);
    });
});