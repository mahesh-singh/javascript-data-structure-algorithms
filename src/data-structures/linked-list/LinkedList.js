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