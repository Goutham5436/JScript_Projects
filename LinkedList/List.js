class node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}
const a = new node('A');
const b = new node('B');
const c = new node('C');
const d = new node('D');

a.next = b;
b.next= c;
c.next = d;


const printLinkedList = (head) =>{
   let current = head;
   while(current != null){
    console.log(current.val)
    current=current.next;
   }
}
printLinkedList(a);