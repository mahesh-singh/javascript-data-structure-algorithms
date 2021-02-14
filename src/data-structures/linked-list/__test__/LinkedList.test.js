import LinkedList from '../LinkedList';
import LinkedListNode from '../LinkedListNode';

describe("LinkedList", ()=> {
    it("should create empty list", ()=>{
        const linkedList = new LinkedList();

        expect(linkedList.head).toBe(null); 
        expect(linkedList.tail).toBe(null);
    });
});

describe("LinkList append method", ()=>{

    // linked list append 
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

});

describe("LinkedList prepend method", ()=> {
    //Prepend 
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

});

describe("LinkedList find method", ()=>{
    it("should return node if value exist in the linked list", ()=>{
        const linkedList = new LinkedList();
        linkedList.append(2).append(3).append(5).append(6);
        const result = linkedList.find(5);

        expect(result.value).toBe(5);
    });
    it("should return null if value doesn't exists in the linked list", ()=>{
        const linkedList = new LinkedList();
        linkedList.append(2).append(3).append(5).append(6);
        const result = linkedList.find(1);

        expect(result).toBe(null);
    });
    it("should return null if linked list is empty", ()=>{
        const linkedList = new LinkedList();
        const result = linkedList.find(5);

        expect(result).toBe(null);
    });
});

describe("LinkedList toArray method", ()=>{
    it("should return array of values for toArray method", ()=>{
        const linkedList = new LinkedList();
        linkedList.append(1).append(2).append(3).append(4);
        const result = linkedList.toArray();
        expect(JSON.stringify(result)).toBe(JSON.stringify([1,2,3,4]));
        expect(result).toEqual([1,2,3,4]);
    });
    it("should return empty array if linked list doesn't have any node", ()=> {
        const linkedList = new LinkedList();
        const result = linkedList.toArray();
        expect([]).toEqual([]);
    });
});

describe("LinkedList delete method", ()=> {
    it("should return deleted node if value exist in the linked list", ()=>{
        const linkedList = new LinkedList();
        linkedList.append(1).append(2).append(3).append(4);
        const result = linkedList.delete(3);
        expect(result.value).toBe(3);
        expect(linkedList.toArray()).toEqual([1,2,4]);
    });

    it("should return null if value doesn't exist in linked list", ()=>{
        const linkedList = new LinkedList();
        linkedList.append(1).append(2).append(3).append(4);
        const result = linkedList.delete(6);
        expect(result).toBe(null);
        expect(linkedList.toArray()).toEqual([1,2,3,4]);
    });

    it("should return node if values exist on head of the linked list", ()=>{
        const linkedList = new LinkedList();
        linkedList.append(1).append(2).append(3).append(4);
        const result = linkedList.delete(1);
        expect(result.value).toBe(1);
        expect(linkedList.toArray()).toEqual([2,3,4]);
    });

    it("should return the node if value exist on tail of the linked", ()=> {
        const linkedList = new LinkedList();
        linkedList.append(1).append(2).append(3).append(4);
        const result = linkedList.delete(4);
        expect(result.value).toBe(4);
        expect(linkedList.toArray()).toEqual([1,2,3]);
    });
});

describe("LinkedList reverse method", ()=>{
    it("should return the reverse the linked list for non empty linked list", ()=> {
        const linkedList = new LinkedList();
        linkedList.append(1).append(2).append(3).append(4);
        const result = linkedList.reverse();
        expect(result.toArray()).toEqual([4, 3,2,1]);
    });
    it("should return empty linkedList for empty linkedList", ()=>{
        const linkedList = new LinkedList();
        expect(linkedList.toArray()).toEqual([]);
    });
});

