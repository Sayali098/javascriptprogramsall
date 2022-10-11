var result2="javascript program";
var newresult=result2.split('a');
const result1=newresult.join('A');
console.log(result1);



var result4="javascript program  and javascript";
let pattern='javascript';
var result5=result4.replaceAll(pattern,'java');
console.log(result5);

var result8="javascript javascript";
var newresult5=result8.replace(/a/g,"A");
console.log(newresult5);