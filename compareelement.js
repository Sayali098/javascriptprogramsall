function compare (arr1,arr2)
{
    
   const result=(JSON.stringify(arr1)==JSON.stringify(arr2))
   if(result){
    console.log('elements are same');

   }
   else{
    console.log('elements are not same');

   }

}
const array1=[1,2,3,4,5];
const array2=[1,2,3,4,5];
console.log(compare(array1,array2));