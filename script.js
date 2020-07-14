/* Lekciq 1 - variables

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

//Variables mutation and type coercion

var firstName = 'John';
var age = 28;

//Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + 'is a ' + age + ' years old' + job + ' . Is he married? ' + isMarried);

//Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' years old ' + job + ' . Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);

//Basic operators

var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

//Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//Logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x); 

//Operator precedence
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average)

//Multiple assignments
var x,y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

//More operators
//x = x * 2;
x *= 2; 
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x); 

//if/ else statements

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

//Boolean logic

var firstName = 'John';
var age = 20;

if (age < 13)
    {
        cosnole.log(firstName + ' is a boy.');
    }
else if (age >= 13 && age < 20)
    {
        console.log(firstName + ' is a teenager.');     
    }
else if(age >= 20 && age < 30)
    {
        console.log(firstName + ' is a young man.')    
    }
else
    {
        console.log(firstName + ' is a man.');
    } 

//The Ternary Operator and switch statements

var firstName = 'John';
var age = 16;


//ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

if (age >= 18)
    {
        var drink = 'beer';
    }
else
    {
        var drink = 'juice';
    }

    
//switch statement
var firstName = 'John';
var job = 'teacher';

switch(job)
    {
        case 'teacher':
            console.log(firstName + ' teaches kids how to code.');
            break;
        case 'driver':
            console.log(firstName + ' drives Uber.');
            break;
        case 'designer':
            console.log(firstName + ' designs beautiful websites.');
            break;
        default:
            console.log(firstName + ' does something else.');
    } 

//Truthy and Falsy values and equality operators

//falsy values: undefined, null, 0, '', NaN
//truthy values: NOT falsy values

var height;

height = 23;

if (height || height === 0)
    {
        console.log('Variable is defined.');
    }
else
    {
        console.log('Variable has NOT been defined');
    }


//equality operators
if (height === '23')
    {
        console.log('The == operator does type coercion!');
    }
*/

//Functions
function calculateAge(birthYear)
{
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);