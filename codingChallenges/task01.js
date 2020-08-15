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
