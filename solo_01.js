var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];


// Employee object creator

var Employee = function(firstName, employNum, annuSal, reviewRate){
	this.firstName = firstName;
	this.employNum = employNum;
	this.annuSal = parseInt(annuSal);
	this.reviewRate = reviewRate;
}

//accessing properties by array index helps eliminate typos

var employee1 = new Employee(atticus[0], atticus[1] , atticus[2], atticus[3]);
var employee2 = new	Employee(jem[0], jem[1], jem[2], jem[3]);
var employee3 = new Employee(boo[0], boo[1], boo[2], boo[3]);
var employee4 = new Employee(scout[0], scout[1], scout[2], scout[3]);

//new array with created employees

var employees = [employee1, employee2, employee3, employee4];
	
//function takes employee object and creates a new object with new bonus 
//parameters

function bonus(employee){

	//setting percent based on review rate
		var percent = 0;
		if(employee.reviewRate == 2){
		percent = 0.00;
	}else if
		(employee.reviewRate == 3){
		percent = 0.04;
	}else if
		(employee.reviewRate == 4){
		percent = 0.06;
	}else if
		(employee.reviewRate == 5){
		percent = 0.10;
	};

	//adding additional bonus based on time with company
	if 
	(employee.employNum.length >= 4 && percent <= 0.07) {
		percent += 0.05;
	}else if 
	(employee.employNum.length >= 4 && percent > 0.07) {
		percent += 0.03;
	};

	//adding salary cap

	if 
	(employee.annuSal > 65000){
		percent -= 0.01;
	};

	//creates new object and parameters for the object including

	var sti = {};
	sti.per= percent.toFixed(2);
	sti.name = employee.firstName;
	sti.total = employee.annuSal * percent + employee.annuSal;
	sti.bonus = employee.annuSal * percent;

	return sti;
};

for(i=0; i<employees.length; i++){
	console.log(bonus(employees[i]));
}	



// this code was originally a property of the employee object
//it originally worked but would not return the return of the function in the object log
//only the function it's self
//if this had been a proptype would a child object have been able to be created
//with a new property method that held the value of the function?
// returns bonus based on salary, rate and review

//bonus= function(this.employee){
//		var rate = this.reviewRate;
//		var sal = this.annuSal;
//		var num = this.employNum;
//		if(rate <= 2 && num.length < 4){
//			bonus = sal + 0;
//		}else if
//			(rate <= 2 && num.length >= 4){
//			bonus = sal * 0.05;
//		}else if
//			(rate === 3 && num.length < 4){
//			bonus = sal * 0.04;
//		}else if
//			(rate === 3 && num.length >= 4){
//			bonus = sal * 0.04 + sal * 0.05;
//		}else if
//			(rate === 4 && num.length < 4){
//			bonus = sal * 0.06;
//		}else if
//			(rate === 4 && num.length >= 4){
//			bonus = sal * 0.06 + sal * 0.05;	
//		}else if
//			(rate === 5 && num.length < 4){
//			bonus = sal * 0.10;
//		}else if
//			(rate === 5 && num.length >= 4){
//			bonus = sal * 0.10 + sal * 0.05;	
//			}
//		return bonus;
//		};


//trying to account for cap and figure total salary

		//if(this.annuSal>65000){
		//this.bonus = this.bonus() - this.bonus() * 0.01;
		//};	


		//this.totalSal = this.annuSal + this.bonus();
		//};






     















