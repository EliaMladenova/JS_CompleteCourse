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
