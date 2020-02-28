export const calculateRepetitions = (/** @type {string} */str, length, char) => {
    const times = str.split("").filter(x => x === char).length;
    const remainingLength = length % str.length;
    return times * Math.floor(length / str.length) + str.slice(0, remainingLength).split("").filter(x => x == char).length;
};