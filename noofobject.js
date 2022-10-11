const person={
    name:'john',
    age:36,
    greet:function greet()
    {
        console.log('hello world');

    }


};
const result=Object.keys(person).length;
console.log(result);



const person1={
    name:'john',
    age:36,
    greet:function greet()
    {
        console.log('hello world');

    }


};
var count=0;     
for(key in person1)
{
    
    count++;
}
console.log(count);