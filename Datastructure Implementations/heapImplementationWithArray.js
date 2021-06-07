let tree = []

tree = [10, 15, 20, 17]

function getParent(i) {
    let equation = Math.ceil((i-1) /2)
    parentIndex = equation
    return parentIndex
}

function getLeftChild(i){
    let equation = Math.ceil((i*2) + 1)
    leftChildIndex = equation
    return leftChildIndex
}

function getRightChild(i){
    let equation = Math.ceil((i*2) + 2)
    rightChildIndex = equation
    return rightChildIndex
}

function swap(index1, index2) {
    console.log("index to swap", index1, index2)
    let temp = tree[index1]
    tree[index1] = tree[index2]
    tree[index2] = temp
}

function heapifyUp() {
    let newElement = tree[tree.length - 1]
    let newElementIndex = tree.length - 1
    console.log(getParent(newElementIndex))
    console.log(getParent(newElementIndex) > newElement)
    while(getParent(newElementIndex) && tree[getParent(newElementIndex)] > newElement){
        let parentIndex = getParent(newElementIndex)
        swap(parentIndex, newElementIndex)
        newElementIndex = parentIndex
    }
}



function add(elementToAdd) {
    tree.push(elementToAdd)
    heapifyUp()
}

console.log("original tree", tree)
add(8)
console.log("tree after operation", tree)

