export default class Stack{ // Stack -> Last In First Out

    // First, we create a constructor, so we can create
    // a stack as an empty array
    constructor() {
        this.Stack = []
    }

    // This is the first method and it's used to
    // add an item to the stack
    Push(P) {
        this.Stack.push(P)
    }

    // We take the first element of the array
    Pop(P) {
        this.Stack.pop()
    }

    // Peak function is to see the last element of
    // the Stack
    Peak() {
        return this.Stack[this.Stack.length - 1]
    }

    // To see te lenght of the stack
    Size() {
        return this.Stack.length
    }

    // To print the Stacj
    Print() {
        console.log(this.Stack.toString())
    }


}

var pila = new Stack()
pila.Push("A")
pila.Push("B")
pila.Push("C")
pila.Pop()
pila.Push("D")


console.log(pila.Print())

console.log('Last element: ', pila.Peak())
console.log(pila.Size())