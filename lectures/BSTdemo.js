class BSTNode { // Nodes in our binary search tree
    constructor(data) {
        this.data = data;
        this.left = null; // Nodes we're pointing to from this node on the left and right
        this.right = null;
    }
}

class BST { // Binary search tree itself
    constructor(root = null) {
        this.root = root; // Topmost node of the tree
    }

    addNode(newNode) { // Adds a node to the tree
        if (this.root === null) { // If the tree is empty (i.e. the root is null), then make this new node the root
            this.root = newNode;
            return;
        }
        let currentNode = this.root;
        // If you pass in a raw value, you have to create the node itself first
        while (currentNode !== null) {
            if (newNode.data < currentNode.data) { // Move left or right
                if (currentNode.left === null) { // Nothing to the left, so insert the node now
                    currentNode.left = newNode;
                    return;
                } // Otherwise, go down the tree to the left
                currentNode = currentNode.left; // Travel down the tree to the left
            } else {
                if (currentNode.right === null) { // Nothing to the right, so insert the node now
                    currentNode.right = newNode;
                    return;
                } // Otherwise, go down the tree to the right
                currentNode = currentNode.right; // Travel down the tree to the right
            }
        }
    }
}
// Adding nodes to the tree
let firstTree = new BST();
firstTree.addNode(new BSTNode(10));
console.log(firstTree);
firstTree.addNode(new BSTNode(5));
console.log(firstTree);
firstTree.addNode(new BSTNode(3));
console.log(firstTree);
firstTree.addNode(new BSTNode(7));
console.log(firstTree);
firstTree.addNode(new BSTNode(15));
console.log(firstTree);
