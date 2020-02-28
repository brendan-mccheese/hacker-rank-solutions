export const calculateMaxHourglassSum = (array) => {
    const maxY = array.length-2;
    const maxX = array[0].length-2;
    let maxSum = null;
    for (let down = 0;down < maxY; down++) {
        for(let across = 0;across < maxX; across++) {
            let row1 = array[down];
            let row2 = array[down+1];
            let row3 = array[down+2];
            row1 = [row1[across], row1[across+1],row1[across+2]];
            row2 = [null, row2[across+1], null];
            row3 = [row3[across], row3[across+1], row3[across+2]];
            // console.log(`
            //     ${row1}\n
            //     ${row2}\n
            //     ${row3}\n
            // `);
            const sum = [...row1, ...row2, ...row3].reduce((a,b) => {
                if(b == null) {return a};
                return a + b;
            }, 0);
            if(maxSum == null || sum > maxSum) {
                maxSum = sum;
            }
        }
    }
    return maxSum;
};