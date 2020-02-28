import {getPairs} from "./get-pairs";

xdescribe("get number pairs", () => {   
    test.each`
    entries | result
    ${[1,2,1,2]} | ${2}
    ${[1,2,1,2,10,10,10,4,4]} | ${4}
    ${[1,2,1,2,6,2,10,2]} | ${3}
    `(`given $entries returns $result`, ({entries, result}) => {
        const res = getPairs(entries);
        expect(res).toBe(result);
    });
});