function sum(num)
{
    if(num>0)
    {
        return num+sum(num-1);
    }
    else{
    console.log('num');
    }
}
const result=parseInt(prompt('enter the number'));
var newresult=sum(result);
console.log(newresult);
