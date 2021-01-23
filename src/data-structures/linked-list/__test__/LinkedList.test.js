import LinkedList from '../LinkedList';
import LinkedListNode from '../LinkedListNode';

describe("LinkList", ()=>{
    it("should create empty list", ()=>{
        const linkedList = new LinkedList();

        expect(linkedList.head).toBe(null); 
        expect(linkedList.tail).toBe(null);
    });

    it("should append a value in empty linkedlist", ()=>{
        const linkedList = new LinkedList();

        linkedList.append(1);
        expect(linkedList.head.value).toBe(1);
        expect(linkedList.tail.value).toBe(1);
        expect(linkedList.head.next).toBe(null);
    });

    it("should append a value linked list", ()=>{
        const linkedList = new LinkedList();
        linkedList.append(1);
        linkedList.append(2);

        expect(linkedList.head.value).toBe(1);
        expect(linkedList.head.next.value).toBe(2);
        expect(linkedList.tail.value).toBe(2);
    });

    it("should prepend a value in existing linked list", ()=>{
        const linkedList = new LinkedList();
        linkedList.append(2);
        linkedList.append(3);
        linkedList.prepend(1);

        expect(linkedList.head.value).toBe(1);
        expect(linkedList.tail.value).toBe(3);
    });

    it("should prepend a value in empty linked list", ()=>{
        const linkedList = new LinkedList();
        linkedList.prepend(1);

        expect(linkedList.head.value).toBe(1);
        expect(linkedList.tail.value).toBe(1);
        expect(linkedList.head.next).toBe(null);
    });

    it("should return true if find the given value if value exists in linked list ", ()=>{
        const linkedList = new LinkedList();
        linkedList.append(1).append(2).append(3);
        
        expect(linkedList.find(2)).toBe(true);
        
    });

})