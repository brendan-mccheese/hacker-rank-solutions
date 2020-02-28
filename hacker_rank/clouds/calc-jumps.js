
const getNextPosition = (clouds, currentPos) => {
    let furthest = clouds[currentPos+2];
    if (furthest != 1) return currentPos+2;
    return currentPos+1;
};

let path = "";

export const calcJumps = (clouds) => {
    let jumps = 0;
    let currentPos = 0;
    path = "0";
    while (currentPos <= clouds.length) {
        currentPos = getNextPosition(clouds, currentPos);
        path = `${path}.${currentPos}`;
        jumps++;
    }
    console.log(path);
    return jumps-1;
};