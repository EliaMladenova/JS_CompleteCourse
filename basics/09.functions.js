function calculateAge(birthYear)
{
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetierment(year, firstname)
{
    var age = calculateAge(year);
    var retierment = 65 - age;
    if (retierment > 0) {console.log(firstname + ' retiers in ' + retierment + ' years.') }
    else {
        console.log(firstname + ' is already retiered.') }
    }

yearsUntilRetierment(1990, 'John');
yearsUntilRetierment(1948, 'Mike');
yearsUntilRetierment(1969, 'Jane');
