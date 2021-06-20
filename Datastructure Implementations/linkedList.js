class Node {
    constructor(){
        this.data = null
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    add(dataToAdd) {
        let newNode = new Node()
        newNode.data = dataToAdd // node created

        if(this.head === null){
            newNode.next = null
            this.head = newNode
        }else{
            newNode.next = this.head

            this.head = newNode
        }

    }

    printList() {
        let p = this.head
        while(p !== null){
            process.stdout.write(p.data + "->")
            p = p.next
        }

        console.log(p)
    }

    reverse() {
        let prev = null
        let current = this.head
        let next
        while(current !== null){
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
    }


}

let list1 = new LinkedList()
list1.printList()
list1.add(5)
list1.add(4)
list1.add(3)
list1.add(2)
list1.add(1)
console.log("before reverse")
list1.printList()
list1.reverse()
console.log("after reverse")
list1.printList()



