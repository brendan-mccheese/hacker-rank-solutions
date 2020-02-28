
class Node {
    left;
    right;
    value;

    constructor(value) {
        this.value = value;
    }
}

const buildTree = (parent, array, offset) => {
    if(!array.length) return;
    if(array.length < offset + 1) return;
    
    console.log(`children ${children}`);
    let lIndex = offset + 1;
    parent.left = new Node(array[lIndex]);
    buildTree(parent.left, array, children);
    let rIndex = offset + 2;
    parent.right = new Node(array[rIndex]);
    buildTree(parent.right, array, children);
}

const arrayToTree = (array) => {
    let root = new Node(array[0]);
    buildTree(root, array.slice(0), 0);
    return root;
}

export const getSum = (array) => {
    let tree = arrayToTree(array);
    console.log(array);
    console.log(JSON.stringify(tree, null, 2));
    return "";
}