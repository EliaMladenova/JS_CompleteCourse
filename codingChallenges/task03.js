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
