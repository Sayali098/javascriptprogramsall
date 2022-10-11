function determine(variable)
{
    if(typeof variable === 'function')
    {
        console.log('variable is type of function ');

    }
    else {
        console.loog('variable is not of function');

    }
}
const count=true;
const x=function()
{
    console.log('hello world');


};
console.log(determine(x));
console.log(determine(count));