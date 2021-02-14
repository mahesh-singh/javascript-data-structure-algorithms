import LinkedListNode from './LinkedListNode';

export default class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(value){
        const newNode = new LinkedListNode(value);

        if(!this.head){
            //list is empty, put item on head
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }
    prepend(value){
        if(!this.head){
            this.append(value);
            return this;
        }
        
        const prependNode = new LinkedListNode(value, this.head);
        
        this.head = prependNode;
        
        return this;
    }

    find(value){
        let currentNode = this.head;

        while(currentNode){
            if(currentNode.value===value){
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    delete(value){
        if(!this.head){
            return null;
        }

        let deletedNode = null;
        
        //first check for head node
        if(this.head.value === value){
            deletedNode = this.head;
            this.head = this.head.next;
            return deletedNode;
        }

        //Check for rest of the node, except tail
        let currentNode = this.head;
        while(currentNode.next){
            if(currentNode.next.value === value){
                deletedNode = currentNode.next;
                currentNode.next = currentNode.next.next;
                return deletedNode;
            }
            currentNode = currentNode.next;
        }
        //check for the tail
        if(this.tail.value === value){
            deletedNode = this.tail;
            this.tail = currentNode;
            return deletedNode;
        }

        return deletedNode;
    }

    reverse(){
        // We can do this by reversing the links by visiting one node at a time.

        let currentNode  = this.head;
        let nextNode =  null;
        let previousNode  = null;

        while(currentNode){
            //1. store the next node, otherwise will loose the next node
            nextNode = currentNode.next;
            
            //2. set the current node's next node to previous node
            currentNode.next = previousNode;

            //3. set the previous node to current node for next iteration
            previousNode = currentNode;

            //4. move to next node by setting current to next node, which store in first step
            currentNode = nextNode;
        }

        //set the tail which is current head
        this.tail = this.head;

        //set the head, previousNode (in last iteration cycle it will set to tail) will become new head
        this.head = previousNode;
        return this;

    }

    toArray(){
        if(!this.head){
            return [];
        }
        let arrayFromLinkedList = [];
        let currentNode = this.head;
        while(currentNode){
            arrayFromLinkedList.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arrayFromLinkedList;
    }
}