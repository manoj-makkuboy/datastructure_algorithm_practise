let tree = []

tree = [10, 15, 20, 17, 19, 25, 21]

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

function heapifyDown(){
    let rootNode = 0
    let indexToHeapifyDown = rootNode

    while(getLeftChild(indexToHeapifyDown)){
        let smallerIndex = getLeftChild(indexToHeapifyDown) // assuming the left would be the smaller index
        if(getRightChild(indexToHeapifyDown) && tree[getRightChild(indexToHeapifyDown)] < tree[getLeftChild(indexToHeapifyDown)]){
            smallerIndex = getRightChild(indexToHeapifyDown)
        }

        console.log("smaller index ", smallerIndex)
        console.log("tree[smallerIndex]", tree[smallerIndex])
        console.log("tree[indexToHeapifyDown]", tree[indexToHeapifyDown])
        
        if(tree[smallerIndex] > tree[indexToHeapifyDown]){
            break
        } else if(tree[smallerIndex] < tree[indexToHeapifyDown]) {
            swap(smallerIndex, indexToHeapifyDown)
        }
        else {
            break
        }
        indexToHeapifyDown = smallerIndex
    }

}

function removeRootElement() {
    let rootNode = 0
    let elementToRemove = rootNode
    elementToRemove.shift

    let lastElementIndex = tree.length - 1
    swap(lastElementIndex, elementToRemove)
    heapifyDown()

}




console.log("original tree", tree)
// add(8)
removeRootElement()
console.log("tree after operation", tree)

