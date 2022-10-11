


function personinfo(num,fun)
{

    fun();
    var num;
}

function person()
{
    console.log('hello');
}
const num1=personinfo(1,person);
console.log(num1);
