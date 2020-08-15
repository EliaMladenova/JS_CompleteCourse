var john = {
    fullName: 'John Smith',
    billsJohn : [124, 48, 268, 180, 42],
    calcTips: function ()
    {
        this.tips = [];
        this.finalValues = [];
    
        for (var i = 0; i < this.billsJohn.length; i++)
        {
            //Determine percentage on tipping rules
            var percantage;
            var bill = this.billsJohn[i];
            
            if (bill < 50) {percantage = .2;}
            else if (bill >= 50 && bill < 200) {percantage = .15;}
            else {percantage = .1;}
            
            //Add result to the corresponding arrays
            this.tips[i] = bill * percantage;
            this.finalValues[i] = bill + bill * percantage;
        }
    }
}

john.calcTips();
console.log(john);

var mark = {
    fullName: 'Mark Miller',
    billsMark : [77, 475, 110, 45],
    calcTips: function ()
    {
        this.tips = [];
        this.finalValues = [];
    
        for (var i = 0; i < this.billsMark.length; i++)
        {
            //Determine percentage on tipping rules
            var percantage;
            var bill = this.billsMark[i];
            
            if (bill < 100) percantage = .2;
            else if (bill >= 100 && bill < 300) percantage = .1;
            else percantage = .25;
            
            //Add result to the corresponding arrays
            this.tips[i] = bill * percantage;
            this.finalValues[i] = bill + bill * percantage;
        }
    }
}

function calcAverage(tips)
{
    var sum = 0;
    for (var i = 0; i < tips.length; i++)
        {
            sum = sum + tips[i];
        }
    return sum / tips.length;
}

//Do the calculations
john.calcTips();
mark.calcTips();
console.log(john, mark);

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average)
    {
        console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
    }
else if (mark.average > john.average)
    {
        console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
    }
