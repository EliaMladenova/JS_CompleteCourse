var mark = {
    fullName: 'Mark Smith',
    mass: 78,
    height: 1.69,
    calcBMIMark: function()
    {
        this.BMI = this.mass / (this.height*this.height);
        return this.BMI;
    }
};

var john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMIJohn: function()
    {
        this.BMI = this.mass / (this.height*this.height);
        return this.BMI;
    }   
};

mark.calcBMIMark();
john.calcBMIJohn();

if (mark.BMI > john.BMI)
    {
        console.log(mark.fullName + ' has a higher BMI of ' + mark.BMI);
    }
else if (mark.BMI < john.BMI)
    {
        console.log(john.fullName + ' has a higher BMI of ' + john.BMI);
    }
else 
    {
        console.log('They have equal BMI ' + john.BMIJohn);
    }
