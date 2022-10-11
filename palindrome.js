function palindrome()
{
    const string='wow';
    const newnum=string.split('');
    const result=newnum.reverse();
    const newresult=result.join('');
    console.log(newresult);
    if(string==newresult)
    {
        console.log('num is palindrome');

    }
    else{
        console.log('num is not palindrome');
    }
    
}
console.log(palindrome());


function Palindrome1()
	{
		var rem, temp, final = 0;
		var number =prompt('enter the number');

		temp = number;
		while(number>0)
		{
			rem = number%10;
			number = parseInt(number/10);
			final = final*10+rem;
		}
		if(final==temp)
		{
			window.alert("The inputed number is Palindrome");
		}
		else
		{
			window.alert("The inputted number is not palindrome");
		}
	
if(final==temp)
{
    console.log('number is plindrome');

}
else{
    console.log('numbr is not palindrome');

}
    }
console.log(Palindrome1());