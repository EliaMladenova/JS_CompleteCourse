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
