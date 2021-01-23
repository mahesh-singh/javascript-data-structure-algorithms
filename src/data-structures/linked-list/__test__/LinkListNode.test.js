import LinkedListNode from "../LinkedListNode";

describe("LinkListNode", ()=>{
    it("should create a LinkedListNode by giving a value", ()=>{
        const node = new LinkedListNode(1);

        expect(node.value).toBe(1);
        expect(node.next).toBe(null);
    });

    it("should linked a LinkedListNode by giving a value and next node", ()=>{
        const nextNode = new LinkedListNode(2);
        const node = new LinkedListNode(1, nextNode);

        expect(node.value).toBe(1);
        expect(node.next.value).toBe(2);
    });

    it("should create a LinkedListNode by giving a object", ()=>{
        const node = new LinkedListNode({key:1, value:"value1"});
        expect(node.value.key).toEqual(1);
        expect(node.value.value).toBe('value1');
    })
})