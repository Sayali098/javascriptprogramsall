



function difference(seta,setb)
{
    const differenceSet=new Set();
    for(i of setb)
    {
        if(seta.has(i))
        {
            
  differenceSet.delete(i);
        }
        //unionSet.add(i);
    }
    return differenceSet;
}
var result=new Set   (['apple','banana']);
var result1=new Set (['grapes', 'apple','mango']);
const newresult=difference(result,result1);
console.log(newresult);

