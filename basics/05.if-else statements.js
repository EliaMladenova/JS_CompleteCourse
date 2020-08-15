var firstName = 'John';
var civilStatus = 'single';

if(civilStatus === 'married') 
    {
        console.log(firstName + ' is married!');
    }
else 
    {
        console.log(firstName + ' will hopefully marry soon :)');
    }

var isMarried = true;
if(isMarried) 
    {
        console.log(firstName + ' is married!');
    }
else 
    {
        console.log(firstName + ' will hopefully marry soon :)');
    }

var massMark = 78;
var massJohn = 92;
var heightMark = 1.69;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark*heightMark);
//console.log(BMIMark);
var BMIJohn = massJohn / (heightJohn*heightJohn);
//console.log(BMIJohn);

if (BMIMark > BMIJohn)
    {
        console.log('Mark\'s BMI is higher than John\'s.')
    }
else
    {
         console.log('John\'s BMI is higher than Mark\'s.')
    }
//var isHigher = BMIMark > BMIJohn;
//console.log('Is Mark\'s BMI higher than John\'s? ' + isHigher); 
