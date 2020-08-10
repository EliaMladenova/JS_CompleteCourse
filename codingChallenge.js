//First task
var massMark = 78;
var massJohn = 92;
var heightMark = 1.69;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark*heightMark);
console.log(BMIMark);
var BMIJohn = massJohn / (heightJohn*heightJohn);
console.log(BMIJohn);

var isHigher = BMIMark > BMIJohn;

console.log('Is Mark\'s BMI higher than John\'s? ' + isHigher); 

//Second task
var teamJohnscore1 = 89;
var teamJohnscore2 = 120;
var teamJohnscore3 = 103;

var averageJohn = (teamJohnscore1 + teamJohnscore2 + teamJohnscore3) / 3;

var teamMikescore1 = 89;
var teamMikescore2 = 120;
var teamMikescore3 = 103;

var averageMike = (teamMikescore1 + teamMikescore2 + teamMikescore3) / 3;

var teamMaryscore1 = 89;
var teamMaryscore2 = 120;
var teamMaryscore3 = 103;

var averageMary = (teamMaryscore1 + teamMaryscore2 + teamMaryscore3) / 3;

if (averageJohn > averageMike && averageJohn > averageMary)
    {
        console.log('John\'s team has higher average score of ' + averageJohn + '.');
    }
else if (averageMike > averageJohn && averageMike > averageMary)
    {
        console.log('Mike\'s team has higher average score of ' + averageMike + '.');
    }
else if (averageMary > averageJohn && averageMary > averageMike)
    {
        console.log('Mary\'s team has higher average score of ' + averageMary + '.');
    }
else 
    {
        console.log('All teams have the same average score of ' + averageMike + '.');
    }

//Third task
function calcTip(bill)
{
    var tip;
    if (bill < 50) 
    { 
        tip = .2;
    }
    else if (bill >= 50 && bill < 200) 
    { 
        tip = .15;
    }
    else 
    { 
        tip = .1;
    }
    
    return tip * bill;
}

var bills = [124, 48, 268];
var tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(tips);
console.log(finalValues);
