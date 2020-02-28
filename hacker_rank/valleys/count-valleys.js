export const countValleys = (/** @type {string} */ valleyString) => {
    let valleyCount = 0;
    let currentLevel = 0;
    let previousLevel = 0;
    let step;
    for(var x=0, length = valleyString.length;x<length;x++) {
        step = valleyString.charAt(x);
        previousLevel = currentLevel;
        if(step == "U") {
            currentLevel++;
        } else {
            currentLevel--;
        }
        if(currentLevel === 0 && previousLevel < 1) valleyCount++;
    }
    return valleyCount;
};