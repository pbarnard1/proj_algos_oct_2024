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

    /** This comment is a JS Doc comment
     * @param {BSTNode} [currentNode=this.root] The root node for the current tree or subtree (default is the root of the tree)
     * @returns integer holding the size of the tree
     */
    size(currentNode = this.root) {
        if (currentNode === null) { // No node, so we've hit a dead end - stop the recursion
            return 0;
        }
        // Count the number of nodes to the left of the current node
        let nodeCountLeft = this.size(currentNode.left);
        let nodeCountRight = this.size(currentNode.right); // Similar deal to the right
        return nodeCountLeft + nodeCountRight + 1; // Note the + 1 to count the root node
    }

    inOrder(currentNode = this.root) { // In-order traversal
        if (currentNode === null) { // We hit a dead end (no node)
            return;
        }
        this.inOrder(currentNode.left); // Go to the left recursively
        console.log(currentNode.data); // Now print out the current node's value
        this.inOrder(currentNode.right); // Go to the right recursively
    }

    preOrder(currentNode = this.root) { // Pre-order traversal
        if (currentNode === null) { // We hit a dead end (no node)
            return;
        }
        console.log(currentNode.data); // Print out the current node's value
        this.preOrder(currentNode.left); // Go to the left recursively
        this.preOrder(currentNode.right); // Go to the right recursively
    }

    postOrder(currentNode = this.root) { // Post-order traversal
        if (currentNode === null) { // We hit a dead end (no node)
            return;
        }
        this.postOrder(currentNode.left); // Go to the left recursively
        this.postOrder(currentNode.right); // Go to the right recursively
        console.log(currentNode.data); // Print out the current node's value
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

// Testing counting the number of nodes in the tree
console.log(firstTree.size());
// Testing the three traversals
console.log("In-order traversal:");
firstTree.inOrder();
console.log("Pre-order traversal:");
firstTree.preOrder();
console.log("Post-order traversal:");
firstTree.postOrder();