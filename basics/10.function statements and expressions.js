//function declaration
//function whatDoudo(job, firstname) {}

//function expression
var whatDoudo = function(job, firstName) {
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does sth else.';
    }
}

console.log(whatDoudo('teacher', 'John'));
