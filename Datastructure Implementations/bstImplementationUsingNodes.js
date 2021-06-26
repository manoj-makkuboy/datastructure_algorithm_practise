/* properties of BST 
 -> the values in the left subtree will be smaller than the parent
 -> the values in the right subtree will be greater than the parent
*/

class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.rootNode = null
    }

    addNode(dataToAdd) {
        let newNode = new Node(dataToAdd)

        if(this.rootNode === null){
            this.rootNode = newNode
            return
        }

        let traversalNode = this.rootNode

        while(true){
            if(dataToAdd < traversalNode.data){
                if(traversalNode.left === null){
                    traversalNode.left = newNode
                    break
                }
                else {
                    traversalNode = traversalNode.left
                    continue
                }
            } else if(dataToAdd > traversalNode.data) {
                if(traversalNode.right === null){
                    traversalNode.right = newNode 
                    break
                }else {
                    traversalNode = traversalNode.right
                    continue
                }
            }
        }
    }
}

let bst = new BST()
bst.addNode(5)
bst.addNode(3)
bst.addNode(1)
bst.addNode(2)
bst.addNode(4)




console.log("bst", bst.rootNode)