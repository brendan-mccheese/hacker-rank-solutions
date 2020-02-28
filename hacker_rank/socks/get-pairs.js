
export const getPairs = (array) => {
    let pairs = 0;
    let distinct = new Set();
    for (const sock of array) {
        distinct.add(sock);
    }
    for(const color of distinct.values()) {
        const socks = array.filter(x => x === color);
        console.log(socks);
        const total = Math.trunc(socks.length / 2);
        pairs += total;
    }
    return pairs;
};