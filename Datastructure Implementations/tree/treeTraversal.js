let { BST } = require("./bstImplementationUsingNodes")
console.log(BST)
let bst = new BST()

bst.addNode(10)
bst.addNode(6)
bst.addNode(15)
bst.addNode(3)
bst.addNode(8)
bst.addNode(20)


console.log("BST => ", JSON.stringify(bst, null, 2))

console.log(bst.rootNode)

function breathFirstTraversal(bst) {
    let q = []
    let visited = []


    q.push(bst.rootNode)

    while(q.length !== 0) {
        let current = q.shift()
        if(current.left){
            q.push(current.left)
        }
        if(current.right){
            q.push(current.right)
        }

        visited.push(current)
    }

    console.log("BFT => ", visited.map((node) => node.data))
}

breathFirstTraversal(bst)